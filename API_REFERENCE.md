# API Reference – SmartQueue

This document describes the internal logic of SmartQueue as if it were a simple API, for educational purposes.

---

## Client Functions

### `enterQueue()`
- **Description:** Adds a client to the queue.
- **Behavior:** Increments the client number and updates the display.
- **Parameters:** None.
- **Returns:** Updates the DOM with the client number and queue status.

---

## Admin Functions

### `nextClient()`
- **Description:** Removes the first client from the queue and shows the next one.
- **Behavior:** If the queue is empty, it shows the message “Fila vazia”.
- **Parameters:** None.
- **Returns:** Updates the DOM with the number of the next client or a message.

---

## Utility Functions

### `updateQueueStatus()`
- **Description:** Displays how many people are in the queue.
- **Used by:** Both client and admin after changes in the queue.

---

## Note

SmartQueue is a front-end-only application and does not include a real backend API. This reference simulates how these functions would be documented if they were API endpoints.
