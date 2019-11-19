// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfContentPages from "./SfContentPages.vue";
import SfTabs from "../SfTabs/SfTabs.vue";

storiesOf("Organisms|ContentPages", module).add("[slot] default", () => ({
  components: {
    SfContentPages,
    SfTabs
  },
  props: {},
  data() {
    return {
      activePage: "My profile"
    };
  },
  template: `<div>
      <SfContentPages
        :active="activePage"
        @click:change="updateActive"
        title="Help">
        <SfContentCategory title="Personal Details">
          <SfContentPage title="My profile">
            <SfTabs :open-tab="1">
            <SfTab title="Security">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
            <SfTab title="Privacy Policy">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
            <SfTab title="Additional Information ">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
          </SfTabs>
        </SfContentPage>
          <SfContentPage title="Shopping details">
            <SfTabs :open-tab="1">
            <SfTab title="Size guide">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
            <SfTab title="Where's my order?">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
          </SfTabs>
          </SfContentPage>
          <SfContentPage title="Loyalty Card">
          This website ("website") is operated by Luma Inc., which includes
          Luma stores, and Luma Private Sales. This privacy policy only covers
          information collected at this website, and does not cover any
          information collected offline by Luma. All Luma websites are covered
          by this privacy policy.
          </SfContentPage>
        </SfContentCategory>
        <SfContentCategory title="Order details">
          <SfContentPage title="Order history">
            <SfTabs :open-tab="1">
            <SfTab title="Security">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
            <SfTab title="Privacy Policy">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
            <SfTab title="Additional Information ">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
          </SfTabs>
        </SfContentPage>
          <SfContentPage title="My reviews">
            <SfTabs :open-tab="1">
            <SfTab title="Size guide">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
            <SfTab title="Where's my order?">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
          </SfTabs>
          </SfContentPage>
        </SfContentCategory>
        <SfContentCategory>
          <SfContentPage title="Logout"/>
        </SfContentCategory>
      </SfContentPages>
      <button 
        v-if="activePage" 
        @click="activePage = ''" 
        style="position: absolute; bottom: .5rem; left: .5rem; border: 0; background-color: transparent" 
        class="mobile-only">back</button>
    </div>`,
  methods: {
    updateActive(title) {
      if (title === "Logout") {
        alert("You have been logged out");
        return;
      }
      this.activePage = title;
    }
  }
}));
