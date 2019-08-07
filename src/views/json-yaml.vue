<template>
  <div class="json-yaml">
    <h2>JSON/YAML</h2>
    <b-row>
      <b-col>
        <label>JSON</label>
        <b-form-textarea
          v-model="json"
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      </b-col>
      <b-col>
        <label>YAML</label>
        <b-form-textarea
          v-model="yaml"
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
        <b-button @click="tojson(false)" variant="primary">To JSON</b-button>&nbsp;
        <b-button @click="tojson(true)" variant="primary">To JSON (Formatted)</b-button>&nbsp;
        <b-button @click="toyaml" variant="primary">To YAML</b-button>&nbsp;
        <b-button @click="clear" variant="warning">Clear</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import jsyaml from 'js-yaml';

export default {
  name: 'json-yaml',
  components: {},
  data() {
    return {
      json: '',
      yaml: '',
      isError: false,
      error: null,
    };
  },
  methods: {
    clearError() {
      this.isError = false;
      this.error = null;
    },
    setError(message) {
      this.isError = true;
      this.error = message;
    },
    tojson(pretty) {
      try {
        const s = jsyaml.safeLoad(this.yaml);
        if (pretty) {
          this.json = JSON.stringify(s, null, 2);
        } else {
          this.json = JSON.stringify(s);
        }
        this.clearError();
      } catch (err) {
        this.setError('Invalid YAML string!');
      }
    },
    toyaml() {
      try {
        const s = jsyaml.safeLoad(this.json);
        this.yaml = jsyaml.safeDump(s);
        this.clearError();
      } catch (err) {
        this.setError('Invalid JSON string!');
      }
    },
    clear() {
      this.json = '';
      this.yaml = '';
      this.clearError();
    },
  },
};
</script>
