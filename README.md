# Simple Chat
A simple chat application built with Meteor 1.4 and ReactJS

Demo: http://meteor-react-simple-chat.demo.atulmy.com/

## Packages Used

### Meteor (atmospherejs)
- **accounts-password** (Meteor Core Accounts)
- **aldeed:collection2** (MongoDB Schema, Schema Validations)
- **mdg:validated-method** (Meteor methods in structured way)
- **reactrouter:react-router-ssr** (React Server Side Rendering)
- **reywood:publish-composite** (Publish data from multiple collections with a reactive join)
- msavin:mongol (In-App MongoDB Editor for Meteor) [optional]

### Node (npm)
- **react** (Core React library)
- **react-dom** (React package for working with the DOM)
- **react-router** (Routing library for React)
- **react-addons-pure-render-mixin** (React PureRenderMixin add-on)
- **react-mounter** (Mount React components to DOM easily in Meteor)
- **react-helmet** (A document head manager for React)
- **babel-runtime** (Babel selfContained runtime)
- **bcrypt** (A bcrypt library for NodeJS)
- moment (Parse, validate, manipulate, and display dates) [optional]

## Features
- Chat Rooms (group chat)
- Direct Messages (one to one chat)
- Server Side Rendering

## Running
- Install Meteor `curl https://install.meteor.com/ | sh` (if you haven't already)
- Clone repo `git clone git@github.com:atulmy/meteor-react-simple-chat.git simple-chat` and `cd simple-chat`
- Install NPM modules `npm install`
- Run Meteor `meteor`

## Screenshots
![screenshot](http://atulmy.com/atulmy.com/attachments/images/simple-chat/simple-chat.png)
![screenshot](http://atulmy.com/atulmy.com/attachments/images/simple-chat/simple-chat-secondary-menu.png)

## Core Structure
    simple-chat
      ├── client
      │   ├── styles
      │   ├── index.html
      │   └── index.js
      │
      ├── imports
      │   ├── api
      │   │   ├── chat-room-members
      │   │   │   ├── collection.js
      │   │   │   ├── methods.js
      │   │   │   └── publish.js
      │   │   │
      │   │   ├── chat-rooms
      │   │   │   ├── collection.js
      │   │   │   ├── methods.js
      │   │   │   └── publish.js
      │   │   │
      │   │   ├── chats
      │   │   │   ├── collection.js
      │   │   │   ├── methods.js
      │   │   │   └── publish.js
      │   │   │
      │   │   └── users
      │   │       ├── methods.js
      │   │       └── publish.js
      │   │
      │   ├── startup
      │   │   ├── client
      │   │   │   ├── index.js
      │   │   │   └── routes.js
      │   │   │
      │   │   ├── common
      │   │   │   └── routes.js
      │   │   │
      │   │   └── server
      │   │       ├── api.js
      │   │       ├── index.js
      │   │       ├── routes.js
      │   │       └── seeds.js
      │   │
      │   ├── ui
      │   │   └── components
      │   │       ├── chat
      │   │       ├── common
      │   │       ├── user
      │   │       │
      │   │       └── app.jsx
      │   │
      │   ├── reducers
      │   ├── index.js
      │   └── routes.js
      │
      ├── server
      │   └── index.js
      │
      └── package.json

## Authors
Atul Yadav - [GitHub](https://github.com/atulmy) &bull; [Twitter](https://twitter.com/atulmy)

## Made with Meteor
Meteor is an ultra-simple environment for building modern web
applications.

With Meteor you write apps:

* in pure JavaScript
* that send data over the wire, rather than HTML
* using your choice of popular open-source libraries

Documentation is available at http://docs.meteor.com/

## License

Copyright (c) 2017 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
