import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getAllProducts: builder.query({
			query: () => ({
				url: "/products",
				method: "GET",
			}),
		}),
		getProductById: builder.query({
			query: id => ({
				url: `product/${id}`,
				method: "GET",
			}),
		}),
	}),
});


export const {useGetAllProductsQuery,useGetProductByIdQuery}=productsApi