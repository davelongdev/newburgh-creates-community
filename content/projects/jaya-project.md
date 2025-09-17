+++ 
title = "jaya's python guessing game"
date = 2025-09-17T14:09:23-04:00
description = 'a project that jaya made with python'
tags = ['coding', 'python', 'STEM']
categories = ['python', 'coding']
draft = false
+++

<script type="module" src="https://pyscript.net/releases/2025.7.3/core.js"></script>
<script type="module">
    const loading = document.getElementById('loading');
    addEventListener('py:ready', () => loading.close());
    loading.showModal();
</script>
<script src="/python/mini-coi.js" scope="./"></script>

<h3>Jaya's Guessing Game</h3>

<div id="terminal-container">
  <div id="terminal-container-inner">
    <script type="py" src="/python/main.py" config="/python/pyscript.toml" terminal worker></script>
  </div>
</div>

<br>
