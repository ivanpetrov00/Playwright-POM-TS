import {test} from '../fixtures/pom.fixture';

test('Deliberate failure: wrong flash message', async ({ pm }) => {
    await pm.loginPage.openLoginPage();
    await pm.loginPage.userLogin('invalidUser', 'invalidPass');
    await pm.securePage.assertSuccess();
});