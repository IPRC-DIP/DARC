---
title: DARC
---

# DARC

## DARC is comming soon.

The dataset is available in textual format, and efforts are underway to enable its visual representation.

**DARC** is a arc dataset solved by human using ANPL.

300 of the 400 ARC tasks were effectively decomposed and converted into Python using the ANPL, averaging 2.7 holes per task -- these tasks solves the test-input, but some may fail to generalize to other input-outputs. The DARC dataset not only houses the final solutions to the ARC tasks but also encapsulates the diverse problem-solving approaches employed by different users. Crucially, it is a dataset detailing how humans decompose abstract procedural tasks into simpler sub-tasks, and ground each task into a program (e.g. Python) in collaboration with an LLM.

The DARC dataset provides a valuable window into the system's task completion processes. By documenting ANPL decompositions, Python code, and detailed interaction histories, it permits us to gain insights into the practical application of Language Learning Models (LLMs) for programming. We hope that this dataset will be useful for others seeking to understand and refine similar systems.


## Details

The dataset can be found at [data](https://github.com/IPRC-DIP/DARC/tree/main/data). Every row in the log file depicts a step in the form of a JSON object. Each step contains five fields: 'action', denoting user activity; 'code', representing the present step's entire Python program; 'user_code', indicating user input for this step; 'gpt_code', signifying the response from GPT at this step; and 'holes', a dictionary mapping function names to natural language.

