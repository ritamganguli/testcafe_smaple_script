import { Selector } from 'testcafe';
import Page from './page-model';

fixture `A set of examples that illustrate how to use TestCafe API`
    .page `https://guidetoiceland.is/`;

// Page model
const page = new Page();

test('Entering Location', async t => {
    await t
        .wait(20000)
        .click(Selector("input[type='search']"))
        .wait(5000)
        .click(Selector("a[data-id='31']"))
        .wait(30000)
        .click(Selector("button[aria-label='close']"))
        .wait(10000);
    
    const thirdSpanItem = Selector("span.x-1sgcgls.ep9uefx3").nth(2);
    await t
        .click(thirdSpanItem)
        .wait(5000);
    const firstDate = Selector("div.x-1c1e297.ef2b54w1").nth(40);
    await t
        .click(firstDate)
        .wait(15000);
    const lastDate = Selector("div.x-1c1e297.ef2b54w1").nth(50);
    await t
        .click(lastDate)
        .wait(15000);
    const dateSelectour = Selector("button.x-1ohihg6.e1khzlvf1").nth(2);
    await t
        .click(dateSelectour)
        .wait(15000);
    const submit_button = Selector("button._2G_fw._1nNbL.e1r1ywj62.x-1i0fcuf.e8ahjg70").nth(0);
    await t
        .click(submit_button)
        .wait(45000);
});
