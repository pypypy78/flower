<template>
  <div class="page_search search_index">
	<div class="warp">
	  <div class="container">
		<div class="row">
		  <div class="col-12">
			<div class="card_result_search">
			  <div class="title">搜索结果</div>
				<!-- 商品搜索结果 -->
			  <list_result_search
				:list="result_goods"
				title="鲜花商城"
				source_table="goods"
			  ></list_result_search>

				<!-- 文章搜索结果 -->
			  <list_result_search
				:list="result_article"
				title="鲜花资讯"
				source_table="article"
			  ></list_result_search>


						  <list_result_search
				v-if="$check_action('/regular_users/list', 'get')"
				:list="result_regular_users_user_name"
				title="普通用户用户姓名"
				source_table="regular_users"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/flower_mall/list', 'get')"
				:list="result_flower_mall_flower_date"
				title="鲜花商城鲜花日期"
				source_table="flower_mall"
			  ></list_result_search>
									  <list_result_search
				v-if="$check_action('/flower_warehouse/list', 'get')"
				:list="result_flower_warehouse_flower_name"
				title="鲜花仓库鲜花名称"
				source_table="flower_warehouse"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/flower_warehouse/list', 'get')"
				:list="result_flower_warehouse_flower_types"
				title="鲜花仓库鲜花种类"
				source_table="flower_warehouse"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/storage_information/list', 'get')"
				:list="result_storage_information_flower_name"
				title="入库信息鲜花名称"
				source_table="storage_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/storage_information/list', 'get')"
				:list="result_storage_information_flower_types"
				title="入库信息鲜花种类"
				source_table="storage_information"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/flower_types/list', 'get')"
				:list="result_flower_types_flower_types"
				title="鲜花种类鲜花种类"
				source_table="flower_types"
			  ></list_result_search>
						</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
import mixin from "../../mixins/page.js";
import list_result_search from "../../components/diy/list_result_search.vue";

export default {
  mixins: [mixin],
  data() {
	return {
	  "query": {
		word: "",
	  },
	  "result_goods": [],
	  "result_article": [],
						"result_regular_users_user_name":[],
															"result_flower_mall_flower_date":[],
									"result_flower_warehouse_flower_name":[],
								"result_flower_warehouse_flower_types":[],
																		"result_storage_information_flower_name":[],
								"result_storage_information_flower_types":[],
																		"result_flower_types_flower_types":[],
				};
  },
  methods: {
	/**
	 * 获取${fmodel.filter.cart_name}
	 */
	get_goods() {
	  this.$get("~/api/goods/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_goods = json.result.list;
		}
	  });
	},
	/**
	 * 获取文章
	 */
	get_article() {
	  this.$get("~/api/article/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_article = json.result.list;
		}
	  });
	},

				/**
	 * 获取user_name
	 */
	get_regular_users_user_name(){
		let url = "~/api/regular_users/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_regular_users_user_name = json.result.list;
			result_regular_users_user_name.map(o => o.title = o['user_name'])
	  			this.result_regular_users_user_name = result_regular_users_user_name
		 	}
		});
	},
													/**
	 * 获取flower_date
	 */
	get_flower_mall_flower_date(){
		let url = "~/api/flower_mall/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "flower_date": this.query.word }, (json) => {
		  if (json.result) {
			var result_flower_mall_flower_date = json.result.list;
			result_flower_mall_flower_date.map(o => o.title = o['flower_date'])
	  			this.result_flower_mall_flower_date = result_flower_mall_flower_date
		 	}
		});
	},
							/**
	 * 获取flower_name
	 */
	get_flower_warehouse_flower_name(){
		let url = "~/api/flower_warehouse/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "flower_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_flower_warehouse_flower_name = json.result.list;
			result_flower_warehouse_flower_name.map(o => o.title = o['flower_name'])
	  			this.result_flower_warehouse_flower_name = result_flower_warehouse_flower_name
		 	}
		});
	},
						/**
	 * 获取flower_types
	 */
	get_flower_warehouse_flower_types(){
		let url = "~/api/flower_warehouse/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "flower_types": this.query.word }, (json) => {
		  if (json.result) {
			var result_flower_warehouse_flower_types = json.result.list;
			result_flower_warehouse_flower_types.map(o => o.title = o['flower_types'])
	  			this.result_flower_warehouse_flower_types = result_flower_warehouse_flower_types
		 	}
		});
	},
																/**
	 * 获取flower_name
	 */
	get_storage_information_flower_name(){
		let url = "~/api/storage_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "flower_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_storage_information_flower_name = json.result.list;
			result_storage_information_flower_name.map(o => o.title = o['flower_name'])
	  			this.result_storage_information_flower_name = result_storage_information_flower_name
		 	}
		});
	},
						/**
	 * 获取flower_types
	 */
	get_storage_information_flower_types(){
		let url = "~/api/storage_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "flower_types": this.query.word }, (json) => {
		  if (json.result) {
			var result_storage_information_flower_types = json.result.list;
			result_storage_information_flower_types.map(o => o.title = o['flower_types'])
	  			this.result_storage_information_flower_types = result_storage_information_flower_types
		 	}
		});
	},
																/**
	 * 获取flower_types
	 */
	get_flower_types_flower_types(){
		let url = "~/api/flower_types/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "flower_types": this.query.word }, (json) => {
		  if (json.result) {
			var result_flower_types_flower_types = json.result.list;
			result_flower_types_flower_types.map(o => o.title = o['flower_types'])
	  			this.result_flower_types_flower_types = result_flower_types_flower_types
		 	}
		});
	},
			
  },
  components: { list_result_search },
	created(){
    this.query.word = this.$route.query.word || "";
  },
  mounted() {
	this.get_goods();
	this.get_article();
					this.get_regular_users_user_name();
														this.get_flower_mall_flower_date();
								this.get_flower_warehouse_flower_name();
							this.get_flower_warehouse_flower_types();
																	this.get_storage_information_flower_name();
							this.get_storage_information_flower_types();
																	this.get_flower_types_flower_types();
			  },
  watch: {
	$route() {
	  $.push(this.query, this.$route.query);
	  this.get_goods();
	  this.get_article();
				  this.get_regular_users_user_name();
													  this.get_flower_mall_flower_date();
							  this.get_flower_warehouse_flower_name();
						  this.get_flower_warehouse_flower_types();
																  this.get_storage_information_flower_name();
						  this.get_storage_information_flower_types();
																  this.get_flower_types_flower_types();
				},
  },
};
</script>

<style scoped>
.card_search {
  text-align: center;
}
.card_result_search>.title {
  text-align: center;
  padding: 10px 0;
}
</style>
