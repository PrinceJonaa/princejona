# AGENTS.md

This file defines the operational guidelines, skills, and resources for AI agents (Jules and others) working in this repository.

## Operational Context

Agents in this repository operate under specific modes defined in the `.clinerules-*` files. Familiarize yourself with these roles:
- `.clinerules-architect`: High-level design and Memory Bank management.
- `.clinerules-code`: Implementation and file modification.
- `.clinerules-ask`: Q&A and documentation.
- `.clinerules-debug`: Analysis and troubleshooting.
- `.clinerules-test`: TDD and verification.

## Universal Agent Skills

All agents, regardless of mode, possess the following "skills". You are expected to invoke these skills frequently to maximize efficiency and maintain context.

### 1. Skill: `CheckSubTask`
**Description**: The ability to break down complex objectives into atomic, verifiable sub-tasks.
**Trigger**: When a plan step involves multiple logical actions (e.g., "Create component AND add styles AND test it").
**Execution**:
1.  **Isolate**: Identify the immediate next logical step.
2.  **Execute**: Perform the action.
3.  **Verify**: explicitly verify the output (read file, run test) *before* marking the sub-task complete.
4.  **Reflect**: If verification fails, create a sub-plan to fix it. Do not bulldoze through.

### 2. Skill: `CompressContext`
**Description**: The ability to synthesize vast amounts of information into a dense, high-signal summary.
**Trigger**: When context length grows, or when summarizing findings for the user or Memory Bank.
**Execution**:
- **Goal**: 99% reduction in volume, 0% loss of nuance.
- **Method**: Focus on *state changes*, *decisions made*, and *current blockers*. Omit boilerplate, full file dumps (unless critical snippets), and conversational filler.
- **Output Format**: Bullet points, concise status tags (e.g., `[STATUS: STABLE]`), and direct links to relevant files.

### 3. Skill: `AsyncBuff`
**Description**: A passive buff that enhances the agent's ability to traverse the codebase asynchronously and efficiently.
**Trigger**: Continuous active effect.
**Execution**:
- **Parallelism**: When reading files, read *all* relevant files in a single turn. Do not ping-pong one file at a time.
- **Backgrounding**: Start long-running processes (servers, builds) in the background (`&`) and continue exploring or editing while they run.
- **Prefetching**: Anticipate the next required piece of information and fetch it in the current step.

## Mandatory Checks

Before completing a turn or marking a task as done, verify:
- [ ] **Sub-Task Check**: Did I verify the specific action I just took?
- [ ] **Compression Check**: Is my reasoning concise and high-signal?
- [ ] **Async Check**: Did I maximize tool usage in this turn (e.g., batched reads)?
