/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/28/流浪地球/index.html","0078d8b6e260765335251f7843ad330b"],["/2023/02/15/舞蹈｜这么可爱的舞蹈，你确定不来扒吗？/index.html","a4d7064a04a9d86cd49ca2e95f098d9e"],["/2023/05/07/我们仨/index.html","5d918b4e58dea86608ca7a44178569d4"],["/about/index.html","7a4771b580d2a0f2a2860e606ac5b7fe"],["/archives/2023/01/index.html","e31eafe6bbee63337c79b13186d26a40"],["/archives/2023/02/index.html","7745e649e4cb0a3ba0e8a9518305d7eb"],["/archives/2023/05/index.html","d2c4484febbef9c8605ebb09278a1118"],["/archives/2023/index.html","e996d8d77a0cf18b2c76aa0038d016c4"],["/archives/index.html","2e7a54538722e31adc6db621fcc72b9d"],["/bangumi/index.html","0fa5e8244b9b17d05076f894fbdeec8d"],["/books/index.html","bb5d95bd1218d407384b17793e21159e"],["/categories/index.html","bd872a48b6c2bf5c0ff183165891dd29"],["/categories/生活杂谈/index.html","4a3dff5c832031335dd2764550770092"],["/css/custom/about/about.css","8211255b0d7f7668be36f24b27bc7ba7"],["/css/custom/about/careers.css","f497ae2597d665655f67dafb3ee95a47"],["/css/custom/about/genshinimpact.css","dbe10f5c38f04b4c376e306326ded0a4"],["/css/custom/about/hello-about.css","7426465875e949ecdde8ab4c401585c5"],["/css/custom/about/site.css","e54ceca529044607fcbf5ad29598b8f1"],["/css/custom/about/skills.css","7744a141b18375f7d87282d46f0e0b10"],["/css/custom/aplayer.css","60ecdb997d8cee7a60781d2dd596a399"],["/css/index.css","d7238d69ac335fd6278322e2d6203a4b"],["/css/mouse.css","3da1ba63086cdf3d05c51373a426b174"],["/css/progress_bar.css","ab7bbd8e0f95cc8028fce0bb4b10bb1f"],["/css/style.css","4b5083e6ffb060d9271ccd818cfd51e4"],["/css/twikoo_beautify.css","884cc009916118c09823aba6d8c3bc14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","7dd2e76d53db1a8512fdcacd162e5ccc"],["/fonts/font.ttf","a919e1f4387fc672e2557aaa0efe6f34"],["/games/index.html","d0725019e2266ec44252369811f0e96d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/about.png","d59f6af5bcca84abd4696d4cde3f9bf2"],["/img/banner.png","1092da7d1b28d3724ec777f112045f87"],["/img/banner2.png","8027649ece06967dbfc00d0b83b25019"],["/img/banner3.png","45c0907d3d0ac25d2c739aa57fee96db"],["/img/banner4.png","9eca167a424b9803f76a170a20d4b6da"],["/img/dark_banner.png","fc8d529d06c721e3a67d071802034bad"],["/img/enfp.png","33cfe24e5ff5be742507ecd6be271360"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/linux.png","7f333c4ea5117524d52c7a0e9edb00fd"],["/img/mysql.png","80fe8c52ef9457f453e20c7661287df5"],["/img/newyear.png","9ab19931b3dafd4d5f8e6d5ef564bdb9"],["/img/profile.png","c9d81ac4256b522ae4cc95eaeaa0f091"],["/img/profile0.png","9a3c289b7fc5dddd7c3e116d5ce8c6d3"],["/img/profile2.png","3f3d33defe04ba4ce6eb280455150b50"],["/img/reward.png","c670c6c49d0ff84b8dd97a202c7f47f1"],["/img/reward2.png","471a150153faf3df2084c7931046e482"],["/img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/img/yb1.png","0e4e631f1058bea63b2a38f49a462e35"],["/img/yb2.png","2f5bc61cdea2f5ab4c8df9693e4b82a4"],["/img/yb3.png","0f234cea3b5434ac88a667a1a8de7212"],["/index.html","a6f4da0fe051987ca22ea52f2cf87ed4"],["/inspire/index.html","c28cf432c156177164cdc3de537ed27c"],["/js/Meting2.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/js/backtotop.js","0362811ba720483835b7e1883757f629"],["/js/crash_cheat.js","46ec7c3b44cc09d9f1305693b0cc944b"],["/js/custom.js","d2fcce059f960eb2d1694931e99a5795"],["/js/gulpfile.js","71375ca526a18f52b869644568bd71b5"],["/js/light.js","30cdfd8e66142f692585a2b6c3fe58f9"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/music.js","709b3c88ee1c5dcce282a3913683e28e"],["/js/musicfunction.js","c82c2c3c6876a90a80e74d4f34dd7740"],["/js/newyear.js","3268cfeb28b153f7a37e410c3651de74"],["/js/operationtime.js","3efde6edfe5ceab3996b2ba1fd0eb288"],["/js/sakura.js","9350b62d2de0fd03aede66c1cd1b2cda"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","af4e210f986ca5ef87e62f5f370c0245"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weather.js","89353db93f709623c4a3bcd47b80217b"],["/js/weibo.js","1046183c90f7ccc9f432e0c1fb3ba99e"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/movies/index.html","41265e59a8f36e802ae514d9cb52fa89"],["/product/index-1.html","40a659dbf199e73ac5e78c9df66442e3"],["/product/index.html","04fead2815cf9a5f293d314d23b3253d"],["/sw-register.js","8cfcf2891159fca9c420016192289e77"],["/tags/index.html","c05c631c4c6e091aff7e653ce6f26baf"],["/tags/影视剧/index.html","a1d2c65a57f390092722341eabf3b74d"],["/tags/感悟/index.html","accb0d8c9b430c6ef9e54dac85df5699"],["/tags/科幻/index.html","4a140667fffa60221c138fdaf9eb74b6"],["/tags/舞蹈/index.html","65f2715f8e5a38e1f8a8c125f2b6a12a"],["/tags/阅读/index.html","538d7331306180dfbdeabe5d81454478"],["/technology/index.html","3fc0d684d466319fbf809ceb307965c4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
