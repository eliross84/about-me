window.onload = function () {
    QUnit.test("UnitTest", function (assert) {
        const numVal = document.getElementsByTagName("article");
        assert.ok(CheckForBasicSyntax(numVal), "passed!");
        const value = document.getElementById("num").innerHTML;
        assert.equal(value, paragraphTrueValue, "passed!");

        UpdateElement("SubjectCode", paragraphTrueValue);
        const valueChange = document.getElementById("num").innerHTML;
        assert.equal(valueChange, paragraphTrueValue, "passed!");
    });

}