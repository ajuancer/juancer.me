---
description: "Juancer's online setup: self-managed services and infrastructure."
menus:
  main:
    name: "Setup"
title: "Setup"
---

# About this site

This is a static site generated with [Hugo](https://gohugo.io).

It is styled using a custom theme I wrote called `Simple`, which utilizes [Tailwind CSS](https://tailwindcss.com/). The CSS is optimized using [PostCSS](https://postcss.org/). The font is a custom version of [Inter](https://rsms.me/inter/) by [Rasmus Andersson](https://rsms.me/) and the Inter Project Authors.

This site uses zero JavaScript and does not store cookies of any kind.

The source code is available in my GitHub repository: [github:ajuancer/juancer.me](https://github.com/ajuancer/juancer.me).

# Other public services

I host a URL shortener at go.juancer.me (intentionally unlinked—it redirects to my homepage) running [Shlink](https://shlink.io/).

I also manage other private services for friends and family which are not intended for general public use.

# Infrastructure

I manage a hybrid infrastructure consisting of a primary VPS and a small home server, both running [Debian](https://debian.org).

Most services are dockerized and orchestrated using [Docker Swarm](https://docs.docker.com/guides/orchestration/#enable-docker-swarm) across these nodes. I use [Nginx](https://nginx.org/en/) as a proxy, content cache, and load balancer. Static pages, including this site, are also served via Nginx. SSL certificates are managed automatically using [Certbot](https://certbot.eff.org/) and [Let's Encrypt](https://letsencrypt.org/).

Security is handled by [UFW](https://help.ubuntu.com/community/UFW) and [Fail2ban](https://www.fail2ban.org/), which tracks login attempts (including SSH). Significant security events trigger email notifications via [Postfix](http://www.postfix.org/).
