<template>
    <section class="main-block">
      <div class="main-block__container">
        <div class="main-block__title">
          {{ title }}
        </div>
        <div class="main-block__forms">
          <slot></slot>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "MainBlock",
    props: {
      title: String,
    },
  };
  </script>

  