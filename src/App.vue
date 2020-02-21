<template>
  <div id="app" class="font-sans py-10 h-screen bg-gray-900">
      <div class="container">
          <h1 class="text-2xl md:text-4xl text-pink-500">BitShift Domain Searcher</h1>
          <p class="text-white my-2">What is bit shifting?</p>
          <p class="text-white my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid illum quidem delectus veniam vel repellat, repudiandae recusandae at ea dolor dolorem quis tenetur, nulla sint repellendus, cumque soluta eligendi.</p>
          <vue-domain-form />
      </div>
  </div>
</template>

<script>
import VueDomainForm from './components/DomainSearchForm';

export default {
  name: 'App',
  components: {
      VueDomainForm,
  },
}
</script>