---
date: '2018-02-21'
title: 'Introduction'
sectionTitle: 'Essentials'
section: 1
subsection: 1
---

# What is Frontwerk

Frontwerk is a **zero configuration** toolset aimed at helping frontend developers achieve **consistency** across projects and across teams. It is CLI that abstracts a set of underlying tools and their configurations in order to improve both the developer experience and the time it takes to get started and maintain a Javascript project.

It has its roots in [react-scripts][react-scripts] and [kcd-scripts][kcd-scripts]. Unlike react-scripts's closed box however, Frontwerk has been designed from the ground up to be easy to extend.

You are essentially encouraged to open the box and extend or even completely replace the configuration of any of the tools without having to give up the benefits of the toolset.

## Why would you use Frontwerk

At the very minimum, your Javascript project requires code linting, testing and some sort of build process. Ever felt the pain of installing, setting up and configuring all these tools for your Javascript frontend project, then repeating that process for your next project, then maintaining all these tools across all your projects, including updating them and making sure the configurations still work?

With Frontwerk, you will be able to start writing actual code in no time at all and not worry about what tool to use to test it, what lint rules to follow and what configuration your build should use.

With Frontwerk, you will painlessly enforce consistency across all your projects and if you work in a team, or as part of multiple teams, that consistency spreads to the team as well. Everyone writes code the same way, tests it the same way, builds it the same way. Plus, any new commer to your team will immediately be able to get started with writing code instead of learning tools and configurations.

### My project is special. Frontwerk isn't for me!

Frontwerk is designed to run for all projects in most cases. When you do bump into a special case, Frontwerk can be easily extended to handle that specific case without requiring you to give up the toolset. In short, you will be able to use your own configuration that fits your special case and still have access to Frontwerk's underlying tools.

No need to ditch the toolset in order to extend its tools.

#### Ok, you've convinced me

Great. The easiest way to get started with Frontwerk is to head over to the [Getting started][getting-started] section of this guide.

[getting-started]: /docs/quick-start
[react-scripts]: https://www.npmjs.com/package/react-scripts
[kcd-scripts]: https://www.npmjs.com/package/kcd-scripts
