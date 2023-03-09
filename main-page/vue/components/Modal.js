export default {
    props: {
      show: Boolean
    },
    template: `
    <transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">OK</button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
    `
  }
  