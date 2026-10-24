// The professor's in-class quizzes. Add a new quiz as another object with the next id.
var CLASSQUIZZES=[
{
"id": 1,
"title": "Class Quiz 1",
"qs": [
[
"DMA controller can steal cycles from CPU (within an instruction cycle)",
[
"at any instance",
"at multiple pre-defined instances",
"at one pre-defined instance",
"at the interrupt breakpoint",
"never ever"
],
[
1
],
"A DMA controller can take the bus only at certain pre-defined points of the instruction cycle (the DMA breakpoints), and there are several of them, not just one. The interrupt breakpoint is where interrupts are processed, not DMA. Worked out from the lecture slides (no answer key was provided)."
],
[
"Which of the following is/are not function(s) of I/O module/controller",
[
"I/O Device communication",
"clock management",
"error detection",
"CPU management",
"power management"
],
[
1,
3,
4
],
"The functions of an I/O module are control and timing, CPU communication, device communication, data buffering and error detection. Clock management, CPU management and power management are not among them. Worked out from the lecture slides (no answer key was provided)."
],
[
"Unique disadvantage(s) of any interrupt based I/O management over programmed I/O management is/are",
[
"I/O operation execution time",
"CPU performance",
"hardware complexity",
"memory consistency",
"interrupt scheduling"
],
[
2,
4
],
"Interrupt-driven I/O needs extra hardware (interrupt lines, a way to identify the interrupting module) and a way to schedule and prioritize multiple interrupts. It does not hurt CPU performance (the CPU keeps working instead of waiting, which is the point of interrupts), and memory consistency is not unique to it. Worked out from the lecture slides (no answer key was provided). Lower confidence: check this against your notes or ask your professor."
],
[
"The following memory/storage in decreasing order of speed is",
[
"DRAM, SRAM, register, magnetic disk",
"magnetic disk, SRAM, DRAM, register",
"magnetic disk, DRAM, SRAM, register",
"register, SRAM, DRAM, magnetic disk"
],
[
3
],
"Speed decreases down the memory hierarchy: registers are fastest, then SRAM (cache), then DRAM (main memory), then magnetic disk. Worked out from the lecture slides (no answer key was provided)."
],
[
"Upon receiving an interrupt, the CPU",
[
"finishes the current instruction execution first",
"immediately executes to interrupt sub-routine",
"decides to execute the sub-routine depending on the interrupt priority",
"might choose not to execute the sub-routine at all in some cases"
],
[
0,
2,
3
],
"The processor finishes the current instruction before acknowledging an interrupt, so it does not execute the routine immediately. Each interrupt line has a priority and a higher priority can interrupt a lower one, so whether the routine runs depends on priority; interrupts can also be masked (disabled), in which case the routine may not run at all. Worked out from the lecture slides (no answer key was provided). Lower confidence: check this against your notes or ask your professor."
],
[
"Which of the following is/are a part of the set of information sent by the CPU to the DMA",
[
"main memory address",
"data size",
"number of clock cycles",
"device address",
"interrupt priority",
"interrupt ID"
],
[
0,
1,
3
],
"The CPU gives the DMA controller read or write, the device address, the starting address of the memory block, the amount of data to transfer and the mode. The number of clock cycles, interrupt priority and interrupt ID are not part of it. Worked out from the lecture slides (no answer key was provided)."
],
[
"In general terms, with increased distance from the processor, primary memory's",
[
"size increases",
"cost and speed increase",
"speed decreases but not cost",
"size and cost decrease"
],
[
0
],
"Moving away from the processor (registers, cache, main memory, disk), size increases while speed decreases and cost per bit decreases. Only 'size increases' is correct as stated. Worked out from the lecture slides (no answer key was provided)."
],
[
"The advantages of Daisy chained bus arbitration is/are",
[
"less hardware requirement",
"much faster",
"more fair",
"more flexible"
],
[
0
],
"Daisy chain arbitration is simple in terms of hardware design (less hardware). Its disadvantages are that it cannot assure fairness (a low-priority device may be locked out) and it is slower; centralized parallel arbitration is the more flexible one. Worked out from the lecture slides (no answer key was provided)."
],
[
"Bus arbitration schemes try to balance",
[
"usability",
"fairness",
"bus priority",
"system and application programs"
],
[
1,
2
],
"Arbitration schemes balance bus priority (the highest-priority device is served first) and fairness (even the lowest-priority device is never locked out completely). Worked out from the lecture slides (no answer key was provided)."
]
]
},
{
"id": 2,
"title": "Class Quiz 2",
"qs": [
[
"A SIMD implementation without lockstep after every instruction may lead to",
[
"SISD",
"MISD",
"MIMD"
],
[
2
],
"Without lockstep, each processing unit can run its own instruction stream on its own data, which is MIMD. SIMD in lockstep runs one instruction stream on multiple data; SISD and MISD do not fit. Your graded quiz marked this answer correct."
],
[
"A process control block describes the following about a process",
[
"the maximum speed of memory and disk access",
"only the state and unique ID of a process",
"all information about a process, including its state, unique ID, memory management information, CPU register values, and scheduling parameters",
"only local variables and dynamic memory allocations",
"solely the scheduling parameters"
],
[
2
],
"The PCB is the kernel's per-process structure holding everything needed to save and restore the process: state, unique ID, program counter, CPU register values, memory management information, scheduling parameters, accounting and I/O status. Your graded quiz marked this answer correct."
],
[
"Which of the following is/are some of the advantage(s) of cloud computing over classical computing",
[
"elasticity of resources",
"privacy of user data",
"resource utilization",
"availability of unlimited resources"
],
[
0,
2
],
"Cloud computing is elastic: resources follow demand and you pay only for what you use. It also improves resource utilization compared with a static data center, which is over-provisioned and leaves resources unused. Privacy of user data is a concern in the cloud rather than an advantage, and resources only appear unlimited, so that is not counted as an advantage. Your graded quiz marked a different answer wrong; the correct set here is worked out from the lecture slides. Lower confidence: check this against your notes or ask your professor."
],
[
"The operating system(s) potentially running on the motherboard is/are",
[
"the one you booted from the BIOS/UEFI",
"the LOM that is on your chipset/CPU/SoC",
"the device drivers for your peripherals",
"the application programs on your USB drive"
],
[
0,
1
],
"Besides the OS you booted from the BIOS/UEFI, the Lights Out Management (LOM) controller on the chipset runs its own small OS whenever power is connected. Device drivers are components of an OS and programs on a USB drive are applications, not operating systems. Your graded quiz marked this answer correct."
],
[
"A hypervisor is a piece of software that can host",
[
"operating systems",
"applications",
"hardware"
],
[
0
],
"A hypervisor (virtual machine monitor) maps virtual resources to physical ones and hosts guest operating systems. Your graded quiz marked this answer correct."
],
[
"In traditional computer systems, the bootstrap loader is located in",
[
"ROM/EEPROM",
"main memory",
"cache",
"CPU"
],
[
0
],
"The bootstrap program is kept in nonvolatile ROM/EEPROM (firmware) because RAM is volatile and loses its contents without power. Your graded quiz marked this answer correct."
],
[
"Which of the following is/are some of the advantage(s) of microkernels",
[
"better kernel scalability",
"secure access to kernel",
"faster communication between user and kernel spaces",
"flexibility of new hardware integration"
],
[
1,
3
],
"Microkernels move services to user space, which makes the OS more secure and reliable and easier to port to new hardware. Communication between user and kernel spaces is slower (a performance overhead), and kernel scalability is not a listed advantage. Your graded quiz marked a different answer wrong; the correct set here is worked out from the lecture slides. Lower confidence: check this against your notes or ask your professor."
],
[
"The statement \"All functions within a programming language library are wrapper functions\" is",
[
"True",
"False"
],
[
1
],
"A wrapper function is a user-level library function whose purpose is to make a system call. Many library functions (for example math or string functions) never make one, so not all of them are wrapper functions. Your graded quiz marked a different answer wrong; the correct set here is worked out from the lecture slides."
],
[
"The main disadvantage(s) of Shared Memory architecture in multiprocessors is/are not",
[
"manageability problems for programmers",
"overhead of scaling",
"cost of scaling",
"speed of access"
],
[
3
],
"Read as 'which is not a disadvantage': the disadvantages of shared memory are poor scalability between memory and CPUs (overhead of scaling), the expense of scaling to more processors, and the programmer's responsibility for synchronization (manageability). Speed of access is an advantage: data sharing is fast and uniform. If the question was meant as 'is/are' the answer would be the first three options. Your graded quiz marked a different answer wrong; the correct set here is worked out from the lecture slides. Lower confidence: check this against your notes or ask your professor."
],
[
"Which of the following is/are OS service(s)",
[
"memory management",
"error correction",
"ensuring user data privacy",
"ensuring secured access to system resources",
"inter-process communication"
],
[
2,
3,
4
],
"The OS services listed in the lecture are program execution, I/O operations, file systems, communication (inter-process communication), error detection and recovery, protection and security (preventing unauthorized access to resources and protecting users from invading each other's privacy), and accounting. 'Error correction' is not 'error detection and recovery', and memory management is not on the lecture's service list. Your graded quiz marked a different answer wrong; the correct set here is worked out from the lecture slides. Lower confidence: check this against your notes or ask your professor."
]
]
},
{
"id": 3,
"title": "Class Quiz 3",
"qs": [
[
"Which of the following is/are not part of the stack memory for a process?",
[
"dynamically allocated memory",
"function return address",
"global constants",
"uninitialized global variables"
],
[
0,
2,
3
],
"The stack holds function call frames: parameters, return addresses and local variables. Dynamically allocated memory lives on the heap, and global constants and uninitialized global variables live in the data segments. Your graded quiz marked a different answer wrong; the correct set here is worked out from the lecture slides."
],
[
"The statement \"Both memory image (of a process) and the PCB serve the same purpose\" is",
[
"The absolute truth",
"Can't be further from the truth",
"beyond the scope of the syllabus..."
],
[
1
],
"The memory image describes the process's address space (text, data, heap, stack), while the PCB is the kernel's bookkeeping structure for the process (state, program counter, registers, scheduling and memory management information). They serve different purposes. Your graded quiz marked this answer correct."
],
[
"The statement \"A running process (at CPU) interrupted for some reason must always be pushed to the wait queue first before it can be sent to the ready queue\" is",
[
"true",
"false"
],
[
1
],
"A running process that is interrupted (for example by a timer interrupt when its quantum expires, or preempted by a higher priority process) goes straight back to the ready queue. Only a process that requests I/O or waits for an event goes to a wait queue. Your graded quiz marked a different answer wrong; the correct set here is worked out from the lecture slides."
],
[
"The statement \"Size of the stack memory for a process can grow without bounds\" is",
[
"true",
"false"
],
[
1
],
"The stack region of a process has a limited size set by the OS; growing without bounds would run into the rest of the address space (stack overflow). Your graded quiz marked this answer correct."
],
[
"Main disadvantages of Distributed Memory architecture in multiprocessors is/are",
[
"manageability problems for programmers",
"overhead of scaling",
"cost of scaling",
"speed of access"
],
[
0,
3
],
"Distributed memory's disadvantages are that the programmer is responsible for communication and synchronization (manageability problems) and that access to another processor's memory goes over the network, so access time is non-uniform (speed of access). Memory scales with the number of processors and commodity parts make it cost effective, so overhead and cost of scaling are not its main disadvantages. Your graded quiz marked a different answer wrong; the correct set here is worked out from the lecture slides."
],
[
"The statement \"Aging in a priority queue prevents fairness for process scheduling\" is",
[
"True",
"False"
],
[
1
],
"Aging gradually raises the priority of a process the longer it waits, which prevents starvation and so improves fairness. Your graded quiz marked this answer correct."
],
[
"Which of the following operating systems was highlighted for its thorough code review during the invited speaker talk:",
[
"Plan 9",
"OpenBSD",
"FreeBSD",
"Red Hat Linux",
"NimbleOS",
"Arch Linux"
],
[
1
],
"The invited speaker talk is not in the lecture slides. OpenBSD is the system best known for thorough security-focused code auditing, so it is the best inference here. Your graded quiz marked a different answer wrong; the correct set here is worked out from the lecture slides. Lower confidence: check this against your notes or ask your professor."
],
[
"A process goes from running to waiting state",
[
"always for reasons internal to that process",
"sometimes but not always due to reasons internal to that process",
"always for reasons external to that process",
"sometimes but not always due to reasons external to that process"
],
[
0
],
"A running process moves to waiting because of something it does itself, such as requesting I/O or waiting for an event, so the reason is always internal. External events (an interrupt, I/O completion) move a process from running to ready or from waiting to ready. Your graded quiz marked a different answer wrong; the correct set here is worked out from the lecture slides. Lower confidence: check this against your notes or ask your professor."
],
[
"The statement \"For a device write (memory to device) on a distributed memory multi-processor with Programmed I/O, the device will always get the most recent data\"",
[
"is definitely false",
"may not be always true",
"makes me drowsy"
],
[
1
],
"On a distributed memory multiprocessor each processor has its own local memory and caches, so the latest copy of the data may not yet have been written back to the memory the device reads from. The statement is therefore not always true, but it is not definitely false either. Your graded quiz marked this answer correct."
],
[
"The advantages of centralized parallel arbitration is/are",
[
"less hardware requirement",
"much faster",
"more fair",
"more flexible"
],
[
2,
3
],
"Centralized parallel arbitration is flexible and can assure fairness; its disadvantage is a more complicated arbiter (more hardware). It is not faster; in the lecture, speed is a weakness of daisy chain arbitration. Your graded quiz marked a different answer wrong; the correct set here is worked out from the lecture slides."
]
]
}
];
