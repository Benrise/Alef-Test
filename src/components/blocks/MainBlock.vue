<template>
    <section class="main-block">
      <div class="main-block__container">
        <div class="main-block__header">
            <div class="main-block__title">
                {{ title }}
            </div>
            <slot name="button"></slot> 
        </div>
        <div class="main-block__forms">
          <slot name="form"></slot>
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

  