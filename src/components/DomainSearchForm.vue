<template>
  <section>
    <form class="w-full" @submit.prevent="validate">
      <div class="flex items-center border-b border-b-2 border-pink-500 py-2">
        <input
          v-model="domain"
          class="appearance-none bg-transparent border-none w-full text-pink-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="google.com"
          aria-label="domain"
        />
        <button
          class="flex-shrink-0 bg-pink-500 hover:bg-pink-700 border-pink-500 hover:border-pink-700 text-sm border-4 text-white py-1 px-4"
          type="submit"
        >
          Search
        </button>
      </div>
      <small class="text-white" v-if="error"
        >The domain name provided is invalid.</small
      >
    </form>
    <div v-if="alternate_domains.length >= 1">
      <ul class="mt-8">
        <li
            class="text-white" v-for="(domain, index) in alternate_domains"
            :key="'domain_' + index"
        >
            {{ domain }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import {
  isValidDomain,
  splitDomain,
  stringToBinary,
  replaceAt,
  binaryToString,
//   checkDomainAvailablity,
} from '@/lib';

export default {
  name: 'VueSearchForm',
  data() {
    return {
      error: null,
      domain: '',
      alternate_domains: [],
    };
  },
  watch: {
    domain() {
      if (this.error) {
        this.error = false;
      }
      if (this.alternate_domains.length >= 1) {
          this.alternate_domains = [];
      }
    },
  },
  methods: {
    validate() {
      if (isValidDomain(this.domain)) {
        const domainArr = splitDomain(this.domain);
        domainArr[0].split('').forEach((letter, position) => {
          const binary = stringToBinary(letter);
          const variant_binary = [];
          const variant_letters = [];
          binary.split('').forEach((n, index) => {
            let val = '';
            if (n == 0) {
              val = replaceAt(binary, index, 1);
            } else {
              val = replaceAt(binary, index, 0);
            }
            variant_binary.push(val);
          });
          variant_binary.forEach(binary => {
            const char = binaryToString(binary).toLowerCase();

            if (!variant_letters.includes(char)) {
              variant_letters.push(char);
              const newDomain =
                replaceAt(domainArr[0], position, char) + '.' + domainArr[1];
              if (isValidDomain(newDomain) && newDomain !== this.domain) {
                if (!this.alternate_domains.includes(newDomain)) {
                  this.alternate_domains.push(newDomain);
                }
              } else {
                console.log(newDomain, 'not valid');
              }
            }
          });
        });
        // this.alternate_domains.map(domain => {
        //     const data = checkDomainAvailablity(domain);
        //     console.log(data);
        //     return domain;
        // });
      } else {
        this.error = true;
      }
    },
  },
};
</script>
