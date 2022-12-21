import { ESLintUtils } from "@typescript-eslint/utils";

import type { Narrow } from "@thundercraft5/type-utils";
import type { TSESTree } from "@typescript-eslint/utils";
import type { RuleContext } from "@typescript-eslint/utils/dist/ts-eslint";

export const createRule = ESLintUtils.RuleCreator(
	name => `https://thundercraft5.github.io/packages/eslint-plugin/${ name }`,
);	

type BuildTuple<E, L extends number, T extends any[] = []> =
	T extends { length: L } ? T : BuildTuple<E, L, [...T, E]>;

export function createArray<
	L extends number = 1,
	E = undefined,
>(length: L, element: Narrow<E>): BuildTuple<E, L>;
export function createArray<
	L extends number = 1,
>(length: L): BuildTuple<undefined, L>;
export function createArray<
	L extends number = 1,
	E = undefined,
>(length: L = 1 as L, element: Narrow<E> = undefined as Narrow<E>) {
	return new Array(length).fill(element) as BuildTuple<E, L>;
}

// Test2