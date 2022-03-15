# Patternfly Seed

Patternfly Seed is an open source build scaffolding utility for web apps. The primary purpose of this project is to give developers a jump start when creating new projects that will use patternfly. A secondary purpose of this project is to serve as a reference for how to configure various aspects of an application that uses patternfly, webpack, react, typescript, etc.

Out of the box you'll get an app layout with chrome (header/sidebar), routing, build pipeline, test suite, and some code quality tools. Basically, all the essentials.

# Development Iterations

A pictorial analysis/view of how the website took its current shape. Depicts the gradual design of the Autotune UI with the help of supporting screenshorts
1. Initially - Standered Layout as from Patternfly-react-seed GitHub repo:
<img width="1058" alt="Out of box dashboard view of patternfly seed" src="https://user-images.githubusercontent.com/5942899/103803761-03a0a500-501f-11eb-870a-345d7d035e6b.png">
2. After designing the sidebar - perks all pages are liked with the sidebar

<img src="/images/1st iter.png">
3. After designing Community Call page
 
<img width="1058" src="images/Community call.png">
<img width="1058" src="images/Comm Call 2.png">

## Quick-start

```bash
git clone https://github.com/patternfly/patternfly-react-seed
cd patternfly-react-seed
npm install && npm run start:dev
```
## Development scripts
```sh
# Install development/build dependencies
npm install

# Start the development server
npm run start:dev

