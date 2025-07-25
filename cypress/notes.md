# **Features of Cypress**
- **Time Travel:** View snapshots of each test step for easy debugging.

- **Debuggability:** Debug failures using familiar browser dev tools with clear error messages.

- **Automatic Waiting:** Cypress auto-waits—no manual delays needed.

- **Spies, Stubs, and Clocks:** Control and verify app behavior like a unit test.

- **Network Traffic Control:** Stub and control API responses without hitting the server.

- **Consistent Results:** Fast, reliable, flake-free tests without Selenium.

- **Cross Browser Testing:** Test across Chrome, Edge, Firefox, and Electron.

# **Why Cypress is Faster than Selenium:**

1. **Runs inside the browser (same run loop):**
   Cypress runs **directly in the browser** alongside your application, giving it native access to the DOM, network, and browser APIs.
   ➤ *Selenium runs outside the browser and communicates via WebDriver protocol, which is slower and less reliable.*

2. **No network latency or context switching:**
   Cypress avoids the **back-and-forth network requests** that Selenium makes between test runner and browser.

3. **Automatic waiting:**
   Cypress **waits intelligently** for elements and requests—no need for manual waits or retry loops.

4. **Built for modern frontends (JS-based):**
   Cypress is built **specifically for JavaScript-based apps**, optimizing for frameworks like React, Vue, Angular, etc., whereas Selenium is generic.

5. **Real-time reactivity:**
   Cypress reacts to changes in the app immediately, rather than polling like Selenium.

### 📌 TL;DR:

> **Cypress is faster because it runs inside the browser, eliminates network overhead, and waits smartly—while Selenium depends on slower, external communication with the browser.**

### **Configure Cypress**
- Open cypress
    ```
    npx open cypress
    ```
- Configure the type of testing
- Configure browser and spec
- Select the spec the test runs