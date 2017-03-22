// Type definitions for Apollo GraphQL  Meteor Integration 0.6.1
// Project: https://github.com/apollographql/meteor-integration
// Definitions by: Keith Gillette <https://github.com/KeithGillette>

// Thanks to: <https://github.com/xavcz> and <https://github.com/csillag>
// <https://github.com/apollographql/meteor-integration/issues/65>

declare module 'meteor/apollo' {
	import { NetworkInterface } from 'apollo-client';
	import { GraphQLSchema } from 'graphql';
	import { ApolloStateSelector } from 'apollo-client/ApolloClient';
	import { IdGetter } from 'apollo-client/ApolloClient';
	import { CustomResolverMap } from 'apollo-client/data/readFromStore';
	import { NetworkInterfaceOptions } from 'apollo-client/transport/networkInterface';

	export function createMeteorNetworkInterface(uriOrInterfaceOpts: string | NetworkInterfaceOptions,
												 secondArgOpts: NetworkInterfaceOptions): NetworkInterface;

	export function meteorClientConfig(customClientConfig?: ApolloClientConfig): any;

	export function createApolloServer(customOptions: GraphQLOptions, customConfig?: customApolloServerConfig): void;

	export interface GraphQLOptions {
		schema: GraphQLSchema;	// values to be used as context and rootValue in resolvers
		context?: any;
		rootValue?: any;	// function used to format errors before returning them to clients
		formatError?: Function;	// additional validation rules to be applied to client-specified queries
		validationRules?: Array<Function>;	// function applied for each query in a batch to format parameters before passing them to `runQuery`
		formatParams?: Function;	// function applied to each response before returning data to clients
		formatResponse?: Function;	// a boolean option that will trigger additional debug logging if execution errors occur
		debug?: boolean;
	}

	export interface ApolloClientConfig {
		networkInterface?: NetworkInterface;
		reduxRootSelector?: string | ApolloStateSelector;
		initialState?: any;
		dataIdFromObject?: IdGetter;
		ssrMode?: boolean;
		ssrForceFetchDelay?: number;
		addTypename?: boolean;
		customResolvers?: CustomResolverMap;
		connectToDevTools?: boolean;
		queryDeduplication?: boolean;
	}

	export interface customApolloServerConfig {
		path?: string;
		configServer?: () => any;
		graphiql?: boolean;
		graphiqlPath?: string;
		graphiqlOptions?: graphiqlOptions;
	}

	export interface graphiqlOptions {
		endpointURL: string; // URL for the GraphQL endpoint this instance of GraphiQL serves
		query?: string; // optional query to pre-populate the GraphiQL UI with
		operationName?: string; // optional operationName to pre-populate the GraphiQL UI with
		variables?: {}; // optional variables to pre-populate the GraphiQL UI with
		result?: {}; // optional result to pre-populate the GraphiQL UI with
	}
}
