import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import SfNotification from "./SfNotification.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

storiesOf("Molecules|Notification", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      }
    },
    data(){
      return {
        visible: true
      }
    },
    template: `<div>
        <label>visible <input type="checkbox" v-model="visible"></label>
        <SfNotification
          :visible="visible"
          :title="title"
          :message="message"
          :action="action"
          :type="type"
          @click:close="visible = false"
        />
      </div>`
  }))
  .add("[slot] icon", () => ({
    components: { SfNotification, SfIcon },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      }
    },
    data(){
      return {
        visible: true
      }
    },
    template: `<div>
        <label>visible <input type="checkbox" v-model="visible"></label>
        <SfNotification
          :visible="visible"
          :title="title"
          :message="message"
          :action="action"
          :type="type"
          @click:close="visible = false"
        >
          <template #icon="{icon}">
            <SfIcon icon="heart" color="white" size="sm" style="margin-right: 1.25rem"/>
          </template>
        </SfNotification>
      </div>`
  }))
  .add("[slot] title", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      }
    },
    data(){
      return {
        visible: true
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type">
      <template #title="{title}">
        CUSTOM TITLE
      </template>
    </SfNotification>`
  }))
  .add("[slot] message", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      }
    },
    data(){
      return {
        visible: true
      }
    },
    template: `<div>
        <label>visible <input type="checkbox" v-model="visible"></label>
        <SfNotification
          :visible="visible"
          :title="title"
          :message="message"
          :action="action"
          :type="type"
          @click:close="visible = false"
        >
          <template #message="{message}">
            CUSTOM MESSAGE
          </template>
        </SfNotification>
      </div>`
  }))
  .add("[slot] action", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      }
    },
    data(){
      return {
        visible: true
      }
    },
    template: `<div>
        <label>visible <input type="checkbox" v-model="visible"></label>
        <SfNotification
          :visible="visible"
          :title="title"
          :message="message"
          :action="action"
          :type="type"
          @click:close="visible = false"
        >
          <template #action="{action, actionHandler}">
            CUSTOM ACTION
          </template>
        </SfNotification>
      </div>`
  }))
  .add("[slot] close", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      }
    },
    data(){
      return {
        visible: true
      }
    },
    template: `<div>
        <label>visible <input type="checkbox" v-model="visible"></label>
        <SfNotification
          :visible="visible"
          :title="title"
          :message="message"
          :action="action"
          :type="type"
          @click:close="visible = false"
        >
          <template #close="closeHandler">
            <div style="position: absolute; top: 1rem; right: 1rem">close</div>
          </template>
        </SfNotification>
      </div>`
  }));
