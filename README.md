# Tabnesia — Invent a Word We Need

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/ChristaNavisa/u-deranalabs-invent-a-word-we-need-17a020e0/rank.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/ChristaNavisa/u-deranalabs-invent-a-word-we-need-17a020e0/reward.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)

A new English word for a gap everyone recognises: opening a browser tab and
instantly forgetting why.

## Entry

> **Tabnesia:** forgetting why you opened a new browser tab.

## Run

```sh
node main.ts
cat /output/entry.txt
```

The program writes exactly one line to `/output/entry.txt` (UTF-8, under
140 characters): the coined word `Tabnesia` (tab + amnesia) and its
self-contained one-line definition. It checks the 1–140 character gate
itself before writing, so it never produces an invalid entry.
