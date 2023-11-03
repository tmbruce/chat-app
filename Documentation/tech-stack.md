# Tech Stack Document

## 1. Introduction

- Brief overview of the technologies and tools that will be used in the development of the application.

## 2. Frontend

### 2.1 Application Framework
- **Description**: React Native was chosen as the framework for developing the mobile application. It allows for the development of cross-platform mobile applications using JavaScript and React, providing a high level of code reusability between iOS and Android platforms.
- **Version**: 0.72.x
#### **Features**
- **Cross-Platform Compatibility**: React Native enables the development of applications that run on both iOS and Android platforms, reducing the need for separate codebases.
- **Native Components**: React Native allows the integration of native UI components, providing a seamless and performant user experience.
- **Hot Reloading**: Developers can see the immediate effects of code changes during development without the need to recompile the entire application.
- **Large Community and Ecosystem**: React Native has a large and active community, along with a vast ecosystem of libraries and packages, which accelerates development.
- **Support for Native Modules**: React Native supports the integration of native modules, allowing access to device-specific functionalities.
#### **Additional Libraries and Tools**
- **React Navigation**: This library will be used for handling navigation within the application, providing a smooth and intuitive user experience.     


### 2.2 State Management

#### 2.2.1 **Redux Toolkit**
-  **Description**: Redux Toolkit was chosen as the state management solution for the application . It provides a set of tools and best practices for efficiently managing the application state, making it a suitable choice.
- **Version**: 1.9.x
#### 2.2.1.1 **Features**
- **Slice-based Architecture**: Redux Toolkit encourages a slice-based architecture, which helps organize the state logic around specific features or components.
- **Simplified Setup**: Redux Toolkit simplifies the setup process for Redux, reducing boilerplate code and allowing developers to focus on writing application logic.
- **Immutability Helpers**: The `createSlice` function provides built-in immutability helpers, making it easier to update the state in a predictable manner.
- **DevTools Integration**: Redux Toolkit seamlessly integrates with Redux DevTools Extension, providing powerful debugging and time-traveling capabilities.
- #### 2.2.2 **Alternative Considerations**
- **Context API**: While Redux Toolkit was chosen for its suitability in managing complex application states, the Context API is also a viable option for simpler state management needs.

## 3. Cryptography Operations (Rust)

- **Description**: Cryptography operations in the application will be implemented in Rust and packaged as a standalone fat binary. This approach offers high performance and security for encryption and decryption processes.

- **Version**: 1.73.x

#### 2.3.1 Features

- **Performance**: Rust is known for its performance characteristics, making it an excellent choice for cryptographic operations that require efficiency and speed.

- **Security**: Rust's memory safety guarantees and strict compile-time checks provide a strong foundation for secure cryptography implementations.

- **Standalone Binary**: The cryptographic operations will be encapsulated in a standalone fat binary, ensuring portability and ease of integration with the main application.

- **Integration with React Native**: The Rust binary will be called from the main React Native application when cryptographic operations are required, ensuring a seamless user experience.

#### 2.3.2 Implementation Details
- For initial connections, the binary will use the Extended Triple Diffie-Hellman (X3DH) protocol along with the well established X25519 elliptic curve.

- The Rust binary will implement the Double Ratchet Algorithm (formerly Axolotl Ratchet), with rotating keys.
- Sending and Receiving key chains will be contained in a key-value store managed by the Rust binary.

- It will utilize well-established cryptographic libraries and follow best practices for secure implementations.

### 2.3.3 Alternative Considerations

- **External Cryptography Libraries**: While a custom Rust implementation was chosen for its performance and security benefits, consideration was given to utilizing established cryptography libraries in other languages. However, the custom Rust implementation aligns with our specific needs and requirements.

## 4. Firebase Integration

### 4.1 Firebase Realtime Database

- **Description**: The Firebase Realtime Database will serve as the primary message relay, allowing real-time synchronization of messages across devices.

- **Features**:
  - Real-time Data Sync: Enables instant updates to messages, ensuring seamless and synchronized conversations.
  - Offline Persistence: Provides a seamless experience even when the device is temporarily offline.

- **Implementation Details**:
  - Firebase SDK Integration: Integrate the Firebase SDK into the React Native application to leverage the Realtime Database features.

---

### 4.2 Firebase Cloud Storage

- **Description**: Firebase Cloud Storage will be used to securely store user images and audio files associated with messages.

- **Features**:
  - Scalable Storage: Offers scalable and secure cloud-based storage for user-generated content.
  - Access Control: Provides fine-grained access controls to ensure data privacy and security.

- **Implementation Details**:
  - Firebase Storage SDK Integration: Incorporate the Firebase Storage SDK to enable seamless uploading and retrieval of images and audio files.

---

### 4.3 Firebase Cloud Messaging

- **Description**: Firebase Cloud Messaging (FCM) will be utilized for sending push notifications to users, ensuring timely message delivery.

- **Features**:
  - Push Notifications: Enables real-time notifications for new messages and updates.
  - Targeted Messaging: Allows for personalized notifications based on user-specific events.

- **Implementation Details**:
  - Firebase Cloud Messaging Setup: Configure FCM within the React Native application, including obtaining necessary credentials and setting up messaging channels.

---

### 4.4 Firebase Phone Authentication

- **Description**: Firebase Phone Authentication will be employed to verify user identities during the registration and login processes.

- **Features**:
  - Phone Number Verification: Provides a secure and user-friendly way to authenticate users using their phone numbers.
  - Multi-factor Authentication: Adds an extra layer of security to user accounts.

- **Implementation Details**:
  - Firebase Phone Auth Integration: Implement Firebase Phone Authentication within the application to facilitate user registration and login using their phone numbers.

---

### 4.5 Security and Compliance

- **Data Privacy**: Ensure compliance with data privacy regulations by implementing secure data storage and transmission practices in accordance with Firebase's security guidelines.

- **User Authentication**: Implement secure user authentication flows using Firebase services to protect user accounts from unauthorized access.

- **Data Encryption**: Utilize Firebase's built-in encryption features to secure data both in transit and at rest.

---

### 4.6 Error Handling and Recovery

- **Error Handling**: Implement comprehensive error handling mechanisms for Firebase services, including network issues, authentication failures, and database write conflicts.

- **Fallback Mechanisms**: Provide fallback options for scenarios where Firebase services may be temporarily unavailable to ensure a seamless user experience.

---


## 5. Deployment

### 5.1 App Stores

- This application will be deployed via Apple App Store and Google Play.

## 6. Version Control

- Git and GitHub will be the tools of choice for version control. This project will utilize a feature branching strategy.

## 7. Testing

### 7.1 Unit Testing

- Unit testing will be completed with react native testing library and jest. 

### 7.2 Integration Testing

- Integration testing will use Detox and Jest.

## 8. Continuous Integration/Continuous Deployment (CI/CD)

- If applicable, describe the CI/CD pipelines or tools used for automated testing and deployment.

## 9. Development Environment

- This project will be developed locally using VS Code. 

## 10. Additional Tools and Libraries

### JavaScript Libraries
- Redux Toolkit
- Jest
- i18n
- React Navigation
- React Native vector icons
- React Native Firebase
- Protobuf.js
  
### Rust Libraries
- Ring Cryptography
- Protobuf
- Rusqlite