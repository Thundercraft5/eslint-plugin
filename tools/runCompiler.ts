import * as fs from "fs";

import ts from "typescript";

function watch(rootFileNames: string[], options: ts.CompilerOptions) {
	const files: ts.MapLike<{ version: number }> = {};

	// initialize the list of files
	rootFileNames.forEach(fileName => {
		files[fileName] = { version: 0 };
	});

	// Create the language service host to allow the LS to communicate with the host
	const servicesHost: ts.LanguageServiceHost = {
			getScriptFileNames: () => rootFileNames,
			getScriptVersion: fileName => files[fileName]?.version.toString() ?? "0",
			getScriptSnapshot(fileName) {
				if (!fs.existsSync(fileName)) return undefined;


				return ts.ScriptSnapshot.fromString(fs.readFileSync(fileName).toString());
			},
			getCurrentDirectory: () => process.cwd(),
			getCompilationSettings: () => options,
			getDefaultLibFileName: options => ts.getDefaultLibFilePath(options),
			fileExists: ts.sys.fileExists,
			readFile: ts.sys.readFile,
			readDirectory: ts.sys.readDirectory,
			directoryExists: ts.sys.directoryExists,
			getDirectories: ts.sys.getDirectories,
		},

		// Create the language service files
		services = ts.createLanguageService(servicesHost, ts.createDocumentRegistry());

	// Now let's watch the files
	rootFileNames.forEach(fileName => {
		// First time around, emit all files
		emitFile(fileName);

		// Add a watch on the file to handle next change
		fs.watchFile(fileName, { persistent: true, interval: 250 }, (curr, prev) => {
			// Check timestamp
			if (+curr.mtime <= +prev.mtime) return;


			// Update the version to signal a change in the file
			files[fileName]!.version++;

			// write the changes to disk
			emitFile(fileName);
		});
	});

	function emitFile(fileName: string) {
		const output = services.getEmitOutput(fileName);

		if (!output.emitSkipped) console.log(`Emitting ${ fileName }`);
		else {
			console.log(`Emitting ${ fileName } failed`);
			logErrors(fileName);
		}

		output.outputFiles.forEach(o => {
			fs.writeFileSync(o.name, o.text, "utf8");
		});
	}

	function logErrors(fileName: string) {
		const allDiagnostics = services
      .getCompilerOptionsDiagnostics()
      .concat(services.getSyntacticDiagnostics(fileName))
      .concat(services.getSemanticDiagnostics(fileName));

		allDiagnostics.forEach(diagnostic => {
			const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");

			if (diagnostic.file) {
				const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(
					diagnostic.start!,
				);

				console.log(`  Error ${ diagnostic.file.fileName } (${ line + 1 },${ character + 1 }): ${ message }`);
			} else console.log(`  Error: ${ message }`);
		});
	}
}

// Initialize files constituting the program as all .ts files in the current directory
const currentDirectoryFiles = fs
  .readdirSync(process.cwd())
  .filter(fileName => fileName.length >= 3 && fileName.slice(- 3, fileName.length - 3 + 3) === ".ts");

// Start the watcher
watch(currentDirectoryFiles, { module: 99 });