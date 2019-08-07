<template>
  <div class="hash">
    <h2>Hash</h2>
    <b-row>
      <b-col>
        <b-form-group label="Method">
          <b-form-radio-group v-model="method" :options="methodOptions" @change="calc">
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-checkbox v-model="isHmac" @change="calc">
          with HMAC
        </b-form-checkbox>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-textarea v-if="isHmac" v-model="hmac" rows="1" max-rows="3" @keyup="calc">
        </b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>Input</div>
        <b-form-textarea v-model="input" rows="1" max-rows="3" @keyup="calc">
        </b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>Result</div>
        <div>
          {{ output }}
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';

export default {
  name: 'hash',
  components: {},
  data() {
    return {
      methodOptions: [
        { text: 'MD5', value: 'MD5' },
        { text: 'SHA-1', value: 'SHA1' },
        { text: 'SHA-224', value: 'SHA224' },
        { text: 'SHA-256', value: 'SHA256' },
        { text: 'SHA-384', value: 'SHA384' },
        { text: 'SHA-512', value: 'SHA512' },
        { text: 'SHA-3', value: 'SHA3' },
        { text: 'RIPEMD-160', value: 'RIPEMD160' },
      ],
      method: null,
      isHmac: false,
      hmac: '',
      input: '',
      output: '',
    };
  },
  methods: {
    calc() {
      this.$nextTick(() => {
        const {
          method, isHmac, hmac, input,
        } = this;

        if (!method) {
          return;
        }

        const methodToCall = ((isHmac) ? 'Hmac' : '') + method;
        this.output = (isHmac)
          ? CryptoJS[methodToCall](input, hmac)
          : CryptoJS[methodToCall](input);
      });
    },
  },
};
</script>
