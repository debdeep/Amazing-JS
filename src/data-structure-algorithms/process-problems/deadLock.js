/**
 * A simple Lock class to simulate resource locking in concurrent systems.
 * 
 * This lock uses a boolean flag to indicate whether the resource is currently held.
 * The `acquire` method waits until the lock is free before acquiring it,
 * while the `release` method frees the lock.
 */
class Lock {
  /**
   * Creates a new Lock instance.
   * @constructor
   */
  constructor() {
    /** @private {boolean} Indicates whether the lock is currently held */
    this.locked = false;
  }

  /**
   * Attempts to acquire the lock.
   * If the lock is already held, waits in a loop until it becomes free.
   * 
   * @async
   * @returns {Promise<void>} Resolves when the lock has been successfully acquired.
   */
  async acquire() {
    while (this.locked) {
      // Yield control to the event loop to avoid busy waiting
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    this.locked = true;
  }

  /**
   * Releases the lock, making it available for other processes.
   */
  release() {
    this.locked = false;
  }
}

/** @type {Lock} Simulated resource R1 */
const R1 = new Lock();
/** @type {Lock} Simulated resource R2 */
const R2 = new Lock();

/**
 * Simulates Process P1 in a distributed system.
 * 
 * P1 acquires R1, performs some work, then attempts to acquire R2.
 * If P2 already holds R2, this will result in deadlock.
 * 
 * @async
 * @returns {Promise<void>}
 */
async function P1() {
  await R1.acquire();
  console.log("P1 acquired R1");
  await new Promise(resolve => setTimeout(resolve, 100)); // simulate work
  await R2.acquire(); // waits forever if P2 holds R2
  console.log("P1 acquired R2");

  // release resources after use
  // R2.release();
  // R1.release();
}

/**
 * Simulates Process P2 in a distributed system.
 * 
 * P2 acquires R2, performs some work, then attempts to acquire R1.
 * If P1 already holds R1, this will result in deadlock.
 * 
 * @async
 * @returns {Promise<void>}
 */
async function P2() {
  await R2.acquire();
  console.log("P2 acquired R2");
  await new Promise(resolve => setTimeout(resolve, 100)); // simulate work
  await R1.acquire(); // waits forever if P1 holds R1
  console.log("P2 acquired R1");

    // release resources after use
  // R1.release();
  // R2.release();
}

// Start both processes concurrently, demonstrating potential deadlock
P1();
P2();
