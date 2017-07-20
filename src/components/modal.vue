<template>
	    <!-- Modal -->
<div class="modal fade" :id="modalId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
      </div>
      <div class="modal-body">
      	<slot name="conTitle"></slot>
        <slot name="content"></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" @click="canceModal">取消</button>
        <button type="button" class="btn btn-primary" @click="subTrue">确定</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			subTrue(){
				this.$emit("backTrue")
			},
			canceModal(){
				this.$emit("backCance",`#${this.modalId}`)
			}
		},
		props:{
			title:{
				type:String,
				default:"标题"
			},
			modalId:{

			}
		}
	}
</script>