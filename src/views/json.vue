<template>
  <div class="json">
    <h2>JSON</h2>
    <b-row>
      <b-col>
        <label>JSON</label>
        <b-form-textarea
          v-model="json"
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <br/>
        <b-alert v-model="isError" variant="danger" dismissible>
          {{ error }}
        </b-alert>
        <b-alert v-model="isValid" variant="success" dismissible>
          JSON is valid!
        </b-alert>
        <b-button @click="validate()" variant="primary">Validate</b-button>&nbsp;
        <b-button @click="format()" variant="primary">Format</b-button>&nbsp;
        <b-button @click="minimise()" variant="primary">Minimise</b-button>&nbsp;
        <b-button @click="clear" variant="warning">Clear</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'json',
  components: {},
  data() {
    return {
      json: '',
      isError: false,
      isValid: false,
      error: null,
    };
  },
  methods: {
    setValid() {
      this.isValid = true;
      this.isError = false;
      this.error = null;
    },
    clearError() {
      this.isValid = false;
      this.isError = false;
      this.error = null;
    },
    setError(message) {
      this.isValid = false;
      this.isError = true;
      this.error = message;
    },
    validate() {
      try {
        JSON.parse(this.json);
        this.setValid();
      } catch (err) {
        this.setError('JSON is not valid!');
      }
    },
    format() {
      try {
        const o = JSON.parse(this.json);
        this.json = JSON.stringify(o, null, 2);
        this.setValid();
      } catch (err) {
        this.setError('Invalid JSON string!');
      }
    },
    minimise() {
      try {
        const o = JSON.parse(this.json);
        this.json = JSON.stringify(o);
        this.setValid();
      } catch (err) {
        this.setError('Invalid JSON string!');
      }
    },
    clear() {
      this.json = '';
      this.clearError();
    },
  },
};
</script>
