# Poppy

English | [简体中文](./README.zh-CN.md)

Beautiful and Enticing theme for Ghost, better support for Chinese. The design comes from [Casper](https://github.com/TryGhost/Casper) and [dribbble](https://dribbble.com/).

&nbsp;

![](.github/screenshot.jpg)

## Features

- [x] Responsive layout
- [x] Navigation support
- [x] Code syntax highlight
- [x] Disqus support
- [x] Subscribers support
- [x] Donate support
- [ ] Share support
- [ ] Time axis
- [ ] Search support
- [ ] Configurable

## Getting started

Clone the repository and install dependencies.

```bash
$ git clone https://github.com/hezhii/poppy.git
$ cd poppy
$ yarn install
```

### Development

You should [install Ghost locally](https://docs.ghost.org/v1.0.0/docs/install-local) first, then link the poppy to the `ghost/content/themes`.

Start ghost:

```bash
$ cd <ghost>
$ ghost start
```

Then you can visit ghost at `http://localhost:2368`. You need to activate the poppy on [the management page](http://localhost:2368/ghost/#/settings/design).

After that, from the theme's root directory:

```bash
$ yan dev
```

Now you can edit `/src` files, which will be compiled to `/assets` automatically.

### Deploy

```bash
$ cd poppy
$ yarn zip
```

This command will packages the theme files into `dist/poppy.zip`, which you can then upload to your site.

You can also download theme package directly from [GitHub releases](https://github.com/hezhii/poppy/releases).
