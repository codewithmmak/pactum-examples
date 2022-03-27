const { request, reporter } = require('pactum');
const addContext = require('mochawesome/addContext');

const awesome_reporter = {
  afterSpec(spec) {
    const mocha_context = spec.recorded['mocha'];
    addContext(mocha_context, {
      title: 'Request',
      value: spec.request
    });
    addContext(mocha_context, {
      title: 'Response',
      value: spec.response
    });
  }
}

before(function () {
  request.setBaseUrl('https://reqres.in');
  reporter.add(awesome_reporter);
});
