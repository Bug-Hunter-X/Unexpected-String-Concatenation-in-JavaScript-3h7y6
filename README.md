# Unexpected String Concatenation Bug in JavaScript

This repository demonstrates a common, yet often overlooked, error in JavaScript: implicit type coercion leading to unexpected string concatenation.

## The Bug

The `foo` function is intended to add two numbers. However, due to JavaScript's dynamic typing, when a number and a string are added together, the number is implicitly converted to a string, resulting in string concatenation.

## The Solution

The solution involves explicitly type-checking or converting the inputs to ensure they are numbers before performing the addition. 