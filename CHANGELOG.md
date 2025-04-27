## [1.3.1](https://github.com/wize-works/wize-comment/compare/v1.3.0...v1.3.1) (2025-04-26)


### Bug Fixes

* update @wizeworks/graphql-factory-mongo to version 1.19.0 ([de2dde5](https://github.com/wize-works/wize-comment/commit/de2dde5607795cb21f03181ac583238f42594f44))

# [1.3.0](https://github.com/wize-works/wize-comment/compare/v1.2.0...v1.3.0) (2025-04-26)


### Features

* add DB_NAME environment variable to deployment configurations ([7c08285](https://github.com/wize-works/wize-comment/commit/7c08285ddcc81f1aa7a5ea850a6a2d0e7af36907))

# [1.2.0](https://github.com/wize-works/wize-comment/compare/v1.1.9...v1.2.0) (2025-04-26)


### Features

* update @wizeworks/graphql-factory-mongo to version 1.18.1 and refactor dbName usage in server.ts. ([98c4e75](https://github.com/wize-works/wize-comment/commit/98c4e75c6698c6c146550c1a0b8578313121e65d))

## [1.1.9](https://github.com/wize-works/wize-comment/compare/v1.1.8...v1.1.9) (2025-04-26)


### Bug Fixes

* wrap image string in quotes for proper parsing ([6444c2b](https://github.com/wize-works/wize-comment/commit/6444c2b64f5ea4c65b6b6ea4df978a4c12d601d0))

## [1.1.8](https://github.com/wize-works/wize-comment/compare/v1.1.7...v1.1.8) (2025-04-26)


### Bug Fixes

* add environment variables for kubelogin installation in deploy workflow ([1161d47](https://github.com/wize-works/wize-comment/commit/1161d47450d82953097c4ce18f01984099780ef3))

## [1.1.7](https://github.com/wize-works/wize-comment/compare/v1.1.6...v1.1.7) (2025-04-26)


### Bug Fixes

* correct formatting of authors label in Docker image metadata ([90737c1](https://github.com/wize-works/wize-comment/commit/90737c16018075c2a44d88dbce51f56e50693247))

## [1.1.6](https://github.com/wize-works/wize-comment/compare/v1.1.5...v1.1.6) (2025-04-26)


### Bug Fixes

* update IMAGE_NAME in deploy.yml to match project name ([f962eff](https://github.com/wize-works/wize-comment/commit/f962eff6ab487bfcc06711d00b08de443a576deb))

## [1.1.5](https://github.com/wize-works/wize-comment/compare/v1.1.4...v1.1.5) (2025-04-25)


### Bug Fixes

* add permissions for deployments in AKS deployment job ([3db0992](https://github.com/wize-works/wize-comment/commit/3db0992d23033c6debd50faab7bf07e033afa01b))

## [1.1.4](https://github.com/wize-works/wize-comment/compare/v1.1.3...v1.1.4) (2025-04-25)


### Bug Fixes

* correct environment variable name for GitHub token in kubelogin installation ([0b0b8ce](https://github.com/wize-works/wize-comment/commit/0b0b8ce36d00add2bfacca9295e61ee2dc8e36c9))

## [1.1.3](https://github.com/wize-works/wize-comment/compare/v1.1.2...v1.1.3) (2025-04-25)


### Bug Fixes

* add GitHub token to kubelogin installation step ([2a16909](https://github.com/wize-works/wize-comment/commit/2a169094b28ea8fb9858caf431276f06c127e162))

## [1.1.2](https://github.com/wize-works/wize-comment/compare/v1.1.1...v1.1.2) (2025-04-25)


### Bug Fixes

* replace manual kubelogin installation with action usage ([ee88d82](https://github.com/wize-works/wize-comment/commit/ee88d82761cf05b48db6b6de6f19e37c57477bf9))

## [1.1.1](https://github.com/wize-works/wize-comment/compare/v1.1.0...v1.1.1) (2025-04-25)


### Bug Fixes

* remove unnecessary model files copy from Dockerfile ([b16143b](https://github.com/wize-works/wize-comment/commit/b16143bbd6b8404dca54e1b10c56ec85b0d73a65))

# [1.1.0](https://github.com/wize-works/wize-comment/compare/v1.0.0...v1.1.0) (2025-04-25)


### Features

* update dependencies and refactor server setup ([ab54fd4](https://github.com/wize-works/wize-comment/commit/ab54fd45a83157021fe26ff873e8258410df6449))

# 1.0.0 (2025-04-24)


### Bug Fixes

* add a newline for better code readability in server.ts ([f6fe5fd](https://github.com/wize-works/wize-comment/commit/f6fe5fdbbee4f8f296645325f5d3789c5b3e4a84))
* add apiVersion to ClusterIssuer in ingress.yaml ([225935c](https://github.com/wize-works/wize-comment/commit/225935c4ccee6dbc0e02c6bd5a88ec24ac81139b))
* add permissions for contents and issues in semantic release job ([ed87a9f](https://github.com/wize-works/wize-comment/commit/ed87a9f2ab457395c575155cb6b49f65f72f54e0))
* change exposed port from 80 to 3000 in Dockerfile ([a66a2f6](https://github.com/wize-works/wize-comment/commit/a66a2f60ee4412989dc136f59404c9361825206b))
* change service port from 80 to 3000 in ingress configuration ([8c77913](https://github.com/wize-works/wize-comment/commit/8c77913b6f8c1d79d4e70d5f1653bb1b14acc033))
* correct copy stage references in Dockerfile ([37b694b](https://github.com/wize-works/wize-comment/commit/37b694b8e801e0c646e799602575f2634e7c0eb7))
* correct Dockerfile copy stage and add environment variables to deployment.yaml ([3c2866b](https://github.com/wize-works/wize-comment/commit/3c2866b74e5f300cccdffcada8b0879d3997cc6a))
* correct model file path in Dockerfile ([45fbf17](https://github.com/wize-works/wize-comment/commit/45fbf17c999427bc8af667599a27ca91c85332a8))
* correct rewrite-target regex in ingress configuration ([3f0e937](https://github.com/wize-works/wize-comment/commit/3f0e9378661900af2be21f0c33ff512169368701))
* ensure LoadBalancer type is specified in service.yaml ([6e0ef57](https://github.com/wize-works/wize-comment/commit/6e0ef5707c353d0e7cd6de4896115c58174a37d6))
* improve GraphQL schema initialization with validation and fallback handling ([3ce7cfb](https://github.com/wize-works/wize-comment/commit/3ce7cfb4244540267bb7afc377b0ca7d806c9069))
* include models directory in Docker image ([0e6e188](https://github.com/wize-works/wize-comment/commit/0e6e1880c7f1918f512ee688ec62c1172156147d))
* remove unnecessary model files from Docker image ([3203329](https://github.com/wize-works/wize-comment/commit/320332936de7127a056ed4de22406cd02d32b67a))
* remove unnecessary service type declaration in service.yaml ([152b964](https://github.com/wize-works/wize-comment/commit/152b964b635e17f4daeebbd1215bfc8990b81740))
* specify host as '0.0.0.0' in app.listen for better accessibility ([0e3d85c](https://github.com/wize-works/wize-comment/commit/0e3d85c840add3125b95d1b0a68183738a550efc))
* specify host in app.listen for better network accessibility ([e63f1ee](https://github.com/wize-works/wize-comment/commit/e63f1eef3127eaa374afd01bf308b54b945271ef))
* specify host in app.listen for clarity ([a9a9673](https://github.com/wize-works/wize-comment/commit/a9a9673c4d75ca9e826fe62be1379345c9e4d050))
* specify namespace for kubectl rollout status in deploy.yml ([2decfbc](https://github.com/wize-works/wize-comment/commit/2decfbce09cf7ce6be5aaca98c4c11759a11e5ef))
* update @wizeworks/graphql-factory to version 1.5.1 ([05b7669](https://github.com/wize-works/wize-comment/commit/05b76699a90fcc8e32a7f3bbaa77cbe5c2d0707c))
* update @wizeworks/graphql-factory version to 1.5.2 in package.json and package-lock.json ([ea052ef](https://github.com/wize-works/wize-comment/commit/ea052ef3a5c8dc9117d7008806132f228572647b))
* update ClusterIssuer configuration and correct cert-manager issuer reference ([c782a26](https://github.com/wize-works/wize-comment/commit/c782a26cd064f0a0f9f0d8a46601e29b355908a5))
* update container and target ports to 4000 in deployment and service configurations ([5f7ef22](https://github.com/wize-works/wize-comment/commit/5f7ef22b1d3e44ebab4f6198bec7331249550e1d))
* update Dockerfile paths and increment version to 1.1.16 in package.json ([67ba60a](https://github.com/wize-works/wize-comment/commit/67ba60a4eef17ffbec6af9ccd594d38ccc0a463d))
* update Dockerfile to copy models from the correct source directory ([767d173](https://github.com/wize-works/wize-comment/commit/767d17388a047acac457d59028b5066ed1a3b36a))
* update Dockerfile to expose port 4000 and clean up server.ts listen configuration ([c94aa64](https://github.com/wize-works/wize-comment/commit/c94aa644334b2139fbbdbd90e31d683157bd9633))
* update Dockerfile to use correct build stage and change license to MIT in package.json ([12c4d8f](https://github.com/wize-works/wize-comment/commit/12c4d8fe2230a78b5020aa08c5d7924f9a28b6d6))
* update field names to use camelCase for consistency in comments GraphQL queries ([62ceacb](https://github.com/wize-works/wize-comment/commit/62ceacbcac06a301231428f1b3c5515ba7bf2479))
* update ingress and service configurations for wize-comment deployment ([e98a85e](https://github.com/wize-works/wize-comment/commit/e98a85e21156a03a73f0ed52a193cc39de3286d4))
* update ingress configuration and enhance error handling in server ([acbb087](https://github.com/wize-works/wize-comment/commit/acbb087b457c93394a6c0e3e5dc29f4d61c1600b))
* update namespace from development to wizeworks in deployment files ([3522720](https://github.com/wize-works/wize-comment/commit/35227208f7e616ba295560018a028d9095c6b4d6))
* update namespace from wizeworks to development in deployment files ([0c5c0a1](https://github.com/wize-works/wize-comment/commit/0c5c0a1e57b554b6e83267e718046eef8e72ca36))
* update package version to 1.1.19 and correct model path in Dockerfile ([8daa979](https://github.com/wize-works/wize-comment/commit/8daa979a7fad2116c3f57b8c1fdb03b7898fdc44))
* update package.json for correct entry points and add type checking; enhance GraphQL resolver typings; improve error handling in context ([a690aed](https://github.com/wize-works/wize-comment/commit/a690aed341d2d0cccbb9974d69f72618a8727709))
* update path for GraphQL schema initialization ([ab022e1](https://github.com/wize-works/wize-comment/commit/ab022e18697e657c61a55b1ac59a2bb0c483bfe7))
* update rewrite-target and path for comment in ingress configuration ([f303d4a](https://github.com/wize-works/wize-comment/commit/f303d4a2b3ec69693eafe8719c14751661f4c3bd))
* update service namespace from development to wizeworks ([53c278c](https://github.com/wize-works/wize-comment/commit/53c278cc6fe22d6b878c2cd3d02cfe7b6f84f712))
* update tenant ID references to camelCase in comments and context ([ebef85f](https://github.com/wize-works/wize-comment/commit/ebef85f8fc9182903a7015a8b8c56ab5dd6c8444))
* update variable names to camelCase in comments handling ([bee6283](https://github.com/wize-works/wize-comment/commit/bee62836f5b9df3fdcbc960e5a72c9487f2edd1c))
* update version to 0.1.15 in package.json ([50ad373](https://github.com/wize-works/wize-comment/commit/50ad373c605c1fa6c8c97552ecad0f3097dc93d4))
* update version to 1.1.15 in package.json ([56de122](https://github.com/wize-works/wize-comment/commit/56de1227d7705cce04b1e236d68f08f2f6079bf3))
* update version to 1.1.18 in package.json ([93ea5f9](https://github.com/wize-works/wize-comment/commit/93ea5f95904d4229f0ce7da36783f33747b7c2a8))
* update version to 1.1.20 in package.json and add namespace to ClusterIssuer in ingress.yaml ([83a8de2](https://github.com/wize-works/wize-comment/commit/83a8de22d945a9e6ce02060e92df88b8d4576c18))
* update version to 1.2.01 in package-lock.json ([688b151](https://github.com/wize-works/wize-comment/commit/688b151a7792b54a699032bd07e14a799459295c))


### Features

* add apiVersion to ClusterIssuer in ingress configuration ([4f4fda3](https://github.com/wize-works/wize-comment/commit/4f4fda30db697a6a60471441863631eb3113b2ae))
* add ClusterIssuer configuration for Let's Encrypt ([eea1781](https://github.com/wize-works/wize-comment/commit/eea1781a0051c301365f9001e6b5c0730723c182))
* add request logging hook to Fastify server ([69cc163](https://github.com/wize-works/wize-comment/commit/69cc1638f82845f7a1957d72751eaebd688b1ed6))
* migrate from Supabase to MongoDB and update dependencies ([37ee38a](https://github.com/wize-works/wize-comment/commit/37ee38a8e44d8c147cac3b44e64e839513cc706e))
* refactor comment type definition and update addComment resolver to include name field ([6407312](https://github.com/wize-works/wize-comment/commit/6407312142e77699452d8200aa8985b75b4a124f))
* reintroduce CommentModel with complete GraphQL structure ([00d1d56](https://github.com/wize-works/wize-comment/commit/00d1d56fbaf0cb1e6ed8203b8bb079c5f490fd63))
* reintroduce CommentModel with GraphQL structure in comment.ts ([aba8ac2](https://github.com/wize-works/wize-comment/commit/aba8ac267e9aaff282c3f52e0a9ba1e914342906))
* set up semantic release with changelog generation ([c7102fc](https://github.com/wize-works/wize-comment/commit/c7102fcd5756fbdb09b2cffa364939dd3ce26155))
* update version to 1.0.10, expose port 4000, and adjust server listen configuration ([14f3d34](https://github.com/wize-works/wize-comment/commit/14f3d34814afbb1b3e5fadc9919c91af7099d714))
