<template>
  <footer class="footer">
    <a href="https://orangii.cn" target="_blank" rel="noopener" style="color: #e4a240;">&copy; Orangii</a>
    <a href="https://myssl.com/huli.li" target="_blank" rel="noopener noreferrer" style="color: #66c18c"><i class="fas fa-lock">&NonBreakingSpace;Safe</i></a>
    <a href="https://orangii.cn/friends/" target="_blank" style="color: #e4a240;"><i class="fas fa-link"></i>&nbsp;友情连接</a>
    <a href="https://github.com/Jiaocz/huli.li" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/Jiaocz/huli.li?style=social" alt="Github Star"></a>
  </footer>
</template>

<script lang="ts" setup>
import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<style scoped>
  .footer {
    opacity: .6;
  }

  .footer a {
    text-decoration: none;
  }

  .footer img {
    height: 1em;
    transform: translateY(2px);
  }

  .footer > *::after {
    content: '|';
    margin: 0 .5em;
    color: gray;
  }

  .footer > *:last-child::after {
    content: '';
  }
</style>