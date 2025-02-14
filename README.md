# React setInterval Memory Leak

This repository demonstrates a common memory leak in React components that use `setInterval` without proper cleanup.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem

The original component uses `setInterval` to update a counter every second. However, it fails to clear the interval when the component unmounts. This results in a memory leak because the interval continues to run even after the component is no longer needed.

## Solution

The corrected component uses a cleanup function within the `useEffect` hook. This function, returned by the `useEffect` hook, clears the interval when the component unmounts or when the dependencies of the `useEffect` hook change. This ensures that the interval is properly stopped, preventing memory leaks.