<template>
  <div class="hash-calculator">
    <h2>hash generator</h2>
    <div class="center gap">
      <label>method</label><br>
      <label class="option">
        <input type="radio" name="method" value="MD5">&nbsp;<span>md5</span>
      </label>
      <label class="option">
        <input type="radio" name="method" value="SHA1">&nbsp;<span>sha1</span>
      </label>
      <label class="option">
        <input type="radio" name="method" value="SHA256">&nbsp;<span>sha256</span>
      </label>
      <label class="option">
        <input type="radio" name="method" value="SHA224">&nbsp;<span>sha224</span>
      </label>
      <label class="option">
        <input type="radio" name="method" value="SHA384">&nbsp;<span>sha384</span>
      </label>
      <label class="option">
        <input type="radio" name="method" value="SHA512">&nbsp;<span>sha512</span>
      </label>
      <label class="option">
        <input type="radio" name="method" value="SHA3">&nbsp;<span>sha3</span>
      </label>
      <label class="option">
        <input type="radio" name="method" value="RIPEMD160">&nbsp;<span>ripemd160</span>
      </label><br><br>
      <label>with hmac</label><br>
      <label class="option">
        <input type="checkbox" name="hmac" value="Hmac">&nbsp;<span>yes please</span>
      </label><br>
      <div class="hmac" style="display: none;"><br>
        <label>hmac key</label>
        <div id="hmac" data-language="plain"></div>
      </div><br>
      <label>text</label>
      <div id="text" data-language="plain"></div>
    </div>
    <div class="center gap">
      <label>result</label>
      <div id="result" data-language="plain"></div>
    </div>
  </div>
</template>
