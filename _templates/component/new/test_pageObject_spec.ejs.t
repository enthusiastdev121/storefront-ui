---
to: packages/tests/components/<%= name %>/<%= name %>.PageObject.ts
force: false
---
<%
  PageObject = name + 'BaseObject'
%>import { BasePage } from '../../utils/BasePage';

export default class <%= PageObject %> extends BasePage {
}
