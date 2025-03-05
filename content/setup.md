---
description: "The online setup of juancer: services and infraestructure managed by me."
menus:
  main:
    name: "setup"
title: "Setup"
---

# This web

This is a static web generated with [hugo](https://gohugo.io) static site generator.

It is stylized with the `Simple` theme package (written by me). It uses [tailwand css](https://tailwindcss.com/). The css is lighthen thanks to [postcss](https://postcss.org/). The font is a custom version of the [Inter](https://rsms.me/inter/) font by [Ramsus Andersson](https://rsms.me/) and the Inter Project Authors.

It uses no javascript at all. It does not store any kind of cookies.

The source code is available at my github repo [github:ajuancer/juancer.me](https://github.com/ajuancer/juancer.me).

# Other public services

I have a url shortener at go.juancer.me (no linked intentionally —it will redirect to my homepage—) that runs [shlink](https://shlink.io/).

Other services are used by friends, family and me and are not intended for general use.

# Infraestructure

I manage my own infraestructure, which currently includes one server which runs some services for friends and family. This services are dockerized and orchestated by [docker swarm](https://docs.docker.com/guides/orchestration/#enable-docker-swarm).

The SO is [debian](https://debian.org) 12.9 (bookworm).

I use [nginx](https://nginx.org/en/) as a proxy, content cache, and load balancer. Static pages, such as this site, are also served using the nginx HTTP server. SSL certificates are generated using [certbot](https://certbot.eff.org/) and [let's encrypt](https://letsencrypt.org/).

Login attempts to all the services —including SSH— are tracked by [fail2Ban](https://www.fail2ban.org/) and handled accordingly with [UFW](https://help.ubuntu.com/community/UFW) rules. If required, they are notified to me by email, thanks to [postfix](http://www.postfix.org/).
