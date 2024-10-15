export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

/** Category of the post */
export enum Category {
  Automotive = 'AUTOMOTIVE',
  LifeUpdate = 'LIFE_UPDATE',
  OutdoorAndTravel = 'OUTDOOR_AND_TRAVEL',
  SoftwareDevelopment = 'SOFTWARE_DEVELOPMENT',
  Tech = 'TECH'
}

export type CreatePostInput = {
  /** Category of post */
  category: Category;
  /** Content of post */
  content: Scalars['String']['input'];
  /** Cover photo of the post */
  coverPhotoURL?: InputMaybe<Scalars['String']['input']>;
  isPublished: Scalars['Boolean']['input'];
  /** Slug of the post. This will be used as a Human-readable ID */
  slug: Scalars['String']['input'];
  /** Tagline of the post */
  tagline?: InputMaybe<Scalars['String']['input']>;
  /** Title of post */
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  authToken: Scalars['String']['output'];
  profile: Profile;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createUser: User;
  echo: Scalars['String']['output'];
  login: LoginPayload;
  register: LoginPayload;
  /** Deletes a post */
  removePost: Post;
  removeUser: User;
  updatePost: Post;
  updateUser: User;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationEchoArgs = {
  message: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  registerInput: CreateUserInput;
};


export type MutationRemovePostArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationRemoveUserArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Node = {
  _id: Scalars['ID']['output'];
};

export type Post = Node & TimeStamps & {
  __typename?: 'Post';
  _id: Scalars['ID']['output'];
  author: User;
  category: Category;
  content: Scalars['String']['output'];
  coverPhotoURL?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status: Status;
  tagline: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Profile = Node & TimeStamps & {
  __typename?: 'Profile';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  profilePhotoURL: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  ping: Scalars['String']['output'];
  port: Scalars['Float']['output'];
  post?: Maybe<Post>;
  posts: Array<Post>;
  user?: Maybe<User>;
  users: Array<User>;
  whoAmI: User;
};


export type QueryPostArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostsArgs = {
  searchInput: SearchPostsInput;
};


export type QueryUserArgs = {
  input: SearchUserInput;
};


export type QueryUsersArgs = {
  input?: InputMaybe<SearchUsersInput>;
};

/** User Role */
export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SearchPostsInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['ID']['input']>;
  category?: InputMaybe<Category>;
  content?: InputMaybe<Scalars['String']['input']>;
  coverPhotoURL?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SearchUserInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type SearchUsersInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
};

/** Status of the post */
export enum Status {
  /** Post has been archived but not deleted. */
  Archived = 'ARCHIVED',
  /** Post has not been published */
  Draft = 'DRAFT',
  /** Post has been published */
  Published = 'PUBLISHED'
}

export type TimeStamps = {
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdatePostInput = {
  /** Category of post */
  category?: InputMaybe<Category>;
  /** Content of post */
  content?: InputMaybe<Scalars['String']['input']>;
  /** Cover photo of the post */
  coverPhotoURL?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Slug of the post. This will be used as a Human-readable ID */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Tagline of the post */
  tagline?: InputMaybe<Scalars['String']['input']>;
  /** Title of post */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  _id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = Node & TimeStamps & {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  handle: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  profilePhotoURL: Scalars['String']['output'];
  role: Role;
  updatedAt: Scalars['DateTime']['output'];
};
