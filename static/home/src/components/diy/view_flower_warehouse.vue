<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce"> 
							<el-col v-if="user_group === '管理员' || $check_field('get','flower_name') || $check_field('add','flower_name') || $check_field('set','flower_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="鲜花名称" prop="flower_name">
												<el-input id="flower_name" v-model="form['flower_name']" placeholder="请输入鲜花名称"
							  v-if="user_group === '管理员' || (form['flower_warehouse_id'] && $check_field('set','flower_name')) || (!form['flower_warehouse_id'] && $check_field('add','flower_name'))" :disabled="disabledObj['flower_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','flower_name')">{{form['flower_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','flower_types') || $check_field('add','flower_types') || $check_field('set','flower_types')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="鲜花种类" prop="flower_types">
								<el-select id="flower_types" v-model="form['flower_types']"						v-if="user_group === '管理员' || (form['flower_warehouse_id'] && $check_field('set','flower_types')) || (!form['flower_warehouse_id'] && $check_field('add','flower_types'))">
						<el-option v-for="o in list_flower_types" :key="o['flower_types']" :label="o['flower_types']"
							:value="o['flower_types']">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','flower_types')">{{form['flower_types']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','flower_number') || $check_field('add','flower_number') || $check_field('set','flower_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="鲜花编号" prop="flower_number">
												<el-input id="flower_number" v-model="form['flower_number']" placeholder="请输入鲜花编号"
							  v-if="user_group === '管理员' || (form['flower_warehouse_id'] && $check_field('set','flower_number')) || (!form['flower_warehouse_id'] && $check_field('add','flower_number'))" :disabled="true"></el-input>
					<div v-else-if="$check_field('get','flower_number')">{{form['flower_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','number_of_flowers') || $check_field('add','number_of_flowers') || $check_field('set','number_of_flowers')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="鲜花数量" prop="number_of_flowers">
								<el-input-number id="number_of_flowers" v-model.number="form['number_of_flowers']"
						v-if="user_group === '管理员' || (form['flower_warehouse_id'] && $check_field('set','number_of_flowers')) || (!form['flower_warehouse_id'] && $check_field('add','number_of_flowers'))" :disabled="disabledObj['number_of_flowers_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','number_of_flowers')">{{form['number_of_flowers']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','flower_prices') || $check_field('add','flower_prices') || $check_field('set','flower_prices')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="鲜花价格" prop="flower_prices">
								<el-input-number id="flower_prices" v-model.number="form['flower_prices']"
						v-if="user_group === '管理员' || (form['flower_warehouse_id'] && $check_field('set','flower_prices')) || (!form['flower_warehouse_id'] && $check_field('add','flower_prices'))" :disabled="disabledObj['flower_prices_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','flower_prices')">{{form['flower_prices']}}</div>
							</el-form-item>
			</el-col>
					
	
	
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/flower_warehouse/view','set') || $check_action('/flower_warehouse/view','add') || $check_option('/flower_warehouse/table','examine')">
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
				<el-form-item v-else>
					<el-button @click="cancel()">返回</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "flower_warehouse_id",
				url_add: "~/api/flower_warehouse/add?",
				url_set: "~/api/flower_warehouse/set?",
				url_get_obj: "~/api/flower_warehouse/get_obj?",
				url_upload: "~/api/flower_warehouse/upload?",

				query: {
					"flower_warehouse_id": 0,
				},

				form: {
								"flower_name":  '', // 鲜花名称
										"flower_types":  '', // 鲜花种类
										"flower_number": this.$get_stamp(), // 鲜花编号
										"number_of_flowers":  0, // 鲜花数量
										"flower_prices":  0, // 鲜花价格
											"flower_warehouse_id": 0, // ID
						
				},
				disabledObj:{
								"flower_name_isDisabled": false,
										"flower_types_isDisabled": false,
										"flower_number_isDisabled": false,
					          			"number_of_flowers_isDisabled": false,
					          			"flower_prices_isDisabled": false,
										},

	
								// 鲜花种类选项列表
				list_flower_types: [""],
	
		
		
		
	
			}
		},
		methods: {


	
	
			
				/**
			 * 获取鲜花种类列表
			 */
			async get_list_flower_types() {
				var json = await this.$get("~/api/flower_types/get_list?");
				if(json.result && json.result.list){
					this.list_flower_types = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
					
			
	
			
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
												if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
							}
						})
					})
				}
														$.db.del("form");

				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){

																				

			},

			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
			submit_check(param) {
																																																			return null;
			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/flower_warehouse/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/flower_warehouse/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/flower_warehouse/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/flower_warehouse/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/flower_warehouse/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
						this.get_list_flower_types();
										},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}




</style>
