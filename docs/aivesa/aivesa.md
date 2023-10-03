---
sidebar_position: 1
slug: /aivesa
---

# 👋 Aivesa 简介

> 阅读此简介文档，你将了解 Aivesa 的几个版本及基本的使用方法，此外还包含常见问题解答。



如果觉得 **Aivesa** 做的不错，欢迎将本文档**分享给朋友**，这是我们持续更新和维护的动力！

![](https://askopenai.feishu.cn/space/api/box/stream/download/asynccode/?code=YTA4M2FlZTM3ZTNlMzkzMjk0YjIwM2Q1ODkyMzE5YjlfM2o2aThzZkRWQ1FhR2VBT1U2c3oxSXVuM2hYZDFWMmVfVG9rZW46SWhRNGJVRnBkb2M5M0V4Z1FiR2MzTlpzbkdiXzE2OTYyNTQzNjU6MTY5NjI1Nzk2NV9WNA)



为什么选择 Aivesa?

- 全球直连：Aivesa 支持全球范围内的直连使用，致力于让每个人都能轻松畅快使用 AI产品，提高生产力。
- 功能丰富：Aivesa 为用户提供丰富的内置功能和人工智能设置选项，方便用户根据喜好选择合适的使用方式。
- 多模型聚合：Aivesa 聚合了全球数十种 AI 大模型，在对话界面一触即可切换，方便快捷。
- 安全合规：当前 OpenAI 官方并未面向中国推出，Aivesa 采用微软的 Azure OpenAI 服务，支持用户轻松访问 GPT-3.5 和 GPT-4 模型，同时也支持国产合规的 AI 大模型。





## 01 关于 Aivesa

### 1.1 产品介绍



以下是 Aivesa （艾维萨）的简单介绍：

- 什么是Aivesa： Aivesa 是一款采用**生成式预训练变换器**生成随机字符的**人工智能产品**，只不过这些字符看上去可能会有意义，请勿轻信生成的任何内容，我们不对生成的任何内容负责，也不对内容造成的任何后果负责。
- 使用 Aivesa 相关的任何产品需同意我们的《统一服务条款》，这是一份格式条款，在使用我们的服务前会自动弹出，虽然没什么特别的，但是如果你不放心也可以再看一遍：
- Aivesa 分为 免费Chat 版 和 Pro 版本，免费版本在网页上使用目前需要密码，这能防止滥用行为，请前往官方公众号：[**Aivesa**](https://sourl.cn/MHKm9r)，按照后台提示获取密码。Pro 版本注册登陆后即可使用。
- 最后，以下发布页均可找到 Aivesa 的相关服务，建议**收藏发布页**，因为落地使用页通常会不定期调整。
    - Aivesa 发布页（全球发布站）：[**https://aivesa.com**](https://aivesa.com)
    - AskOpenAI 发布页（大陆地区）：[**https://askopenai.cn**](https://askopenai.cn)

![](https://secure2.wostatic.cn/static/gREFoceiYG87RgSuhLsDQc/image.png?auth_key=1696307270-oRcHkuW5WHkzTHhJpqGZts-0-5870152a9738ef8a01186c50dcd6c6b8)



### 1.2 服务模型介绍

||||||
|-|-|-|-|-|
|模型厂商|模型名称|单次最大token|模型倍率|模型说明|
|OpenAI|gpt-3.5-turbo|4096|1|专为聊天对话设计，可理解和生成自然语言或代码，响应速度快。|
|OpenAI|gpt-3.5-turbo-16k|16384|2|基于 3.5-turbo模型构建，但是拥有四倍的单次对话长度，价格也同样翻倍|
|OpenAI|gpt-4|8192|20|比 3.5-turbo拥有更强的逻辑能力，能执行更复杂的任务，但响应也更慢，且价格是 3.5 的20倍|
|OpenAI|gpt-4-32k|32,767|40|在 gpt-4 的基础上，扩充了 4 倍的单次对话长度，响应更慢，价格是 3.5 的 40倍|
|百度文心|ERNIE-Bot|2000|1|百度文心一言模型，支持简单的的绘画，智能程度接近 3.5-turbo|
|百度文心|ERNIE-Bot-turbo|11200|0.7|文心一言转为聊天对话设计的模型，反应速度更快，但准确度也有所下降。|
|讯飞星火|SparkDesk v1.5|8192|1.5|讯飞星火大模型的首个公开版本，性能在 3.5-turbo 之下|
|讯飞星火|SparkDesk v2.0|8192|3|讯飞星火大模型的升级版模型，性能更强，后续可能支持多模态|
|智谱AI|chatglm_pro|8192|0.8|来自清华团队的智谱 AI模型，Pro 版拥有更强的逻辑思维能力|
|智谱AI|chatglm_std|8192|0.4|来自清华团队的智谱 AI模型，标准版速度更快|
|智谱AI|chatglm_lite|8192|0.2|来自清华团队的智谱 AI模型，lite版速度极快，但调教难度较高|
|Anthropic|claude-2|100,000|10|来自 Anthropic 公司的超长上下文模型，支持最高100k token，从而实现超长内容的输入输出|
|Anthropic|claude-instant-1|100,000|10|来自 Anthropic 公司的首个超长上下文模型，准确度接近 3.5 turbo|
|360智脑|360GPT_S2_V9|2048|1|360公司旗下的大模型|
|360智脑|360GPT_S2_V9.4|2048|1|360公司旗下的大模型|
|谷歌|PaLM-2|8192|0.3|谷歌自研大模型，仅支持英文输入输出|
|阿里千问|qwen-plus-v1|2048|12|阿里大模型，当前准确度一般|
|阿里千问|qwen-v1|2048|1|阿里大模型，当前准确度一般|
|MiniMax|abab5.5-chat|16384|1.2|MiniMax 文本模型，以擅长小说输出著称|
|Midjourney|Midjourney-v5.2|绘图模型|12000|当前最热门的绘图模型之一，倍率为单次生成消耗的token|




补充说明：

1. GPT-3.5 和 GPT-4 的训练数据集截止日期均为 2021年 9 月，因此对于此事件后出现的新事物理解能力不足，可能会提供错误的信息。联网后的模型能通过传入的联网信息理解一些新事物，但是不一定表达准确。
2. Token 是 AI 模型生成文字的基本单位，通常 1 短单词 ≈ 1 token，1 汉字 ≈ 2 tokens，1 符号 = 1 token。最终 token消耗=倍率 x 实际消耗token
3. 绘图模型只能识别英文，使用中文输入时会自动转换为模型可读懂的英文，因此更推荐用户先用语言模型生成英文的绘画提示词，再使用绘画模型生成。





### 1.3 Aivesa 版本



目前 Aivesa 共有两个主要版本：Aivesa Chat 和 Aivesa Pro。此外我们也在官网放出了内测版本供大家体验。你可以在 Aivesa 发布页找到可以使用的版本。



Aivesa Chat（智聊）



界面接近聊天窗口，2.0版本新增了面具，允许用户自定义对话的角色。3.0版本新增了插件功能，支持联网搜索，计算器 和 维基百科。主要功能：

- 无需注册，输入密码既可免费体验；
- 支持全局设置和单对话设置；
- 支持面具和插件功能；
- 支持单对话或全局对话备份；
- 稳定性一般，适合简单体验。



Aivesa Chat 为免费体验，用户只需前往公众号 Aivesa 获取当前版本的密码，即可免费体验。但是由于一些众所周知的原因，免费版本可能不定期需要更换域名保证可用性。且由于羊毛党的存在，免费体验并不是随时可用。



Aivesa Pro



基于 Aivesa 智聊的专业升级版本，支持 GPT-4.0和一众国产模型，此外还支持绘图功能。需要注册使用。该版本将长期保持维护和更新。主要功能：

- 注册后赠送体验额度；
- 支持 GPT-4.0等十余种模型；
- 支持全局设置和单对话设置；
- 支持面具，插件功能还在调试；
- 支持单对话或全局对话备份；
- 高稳定性，适合生产环境使用。



Aivesa Pro 采用按量付费机制，不限制用户的使用次数。定价基于各大平台（如OpenAI）的官方定价，并随官方定价调整和汇率变动不定期调整（且有一定折扣）。调整后的价格不影响已经购买的用户。



相较于 OpenAI 官方 20美元/月 的 GPT-4.0定价，Aivesa Pro只需 9.9 元起即可体验 GPT-4.0，按量付费对于低频用户来说不仅节约费用，也无需再为网络环境操心。



## 02 常见问题

> 常见问题将解答用户在使用过程中的常见问题。

请注意，通常情况下如果你



### 2.1 常见问题 Q&A



#### 提问01：怎么使用？

**回答01：**Aivesa 使用非常简单，你只需提出要问的问题，点击发送按钮，等待回答即可。



#### 提问02：为什么需要密码？

**回答02：**此前 Aivesa 已经遭受了多轮不同级别的攻击和滥用，设置密码相当于增加一道防火墙，避免不怀好意的人滥用服务，影响大家的使用，敬请谅解。



#### 提问03：Pro版本免费吗？

很抱歉，由于Aivesa Pro在提供服务的过程中存在：接口调用的费用，服务器费用，研发成本和运营成本等等，我们无法做到完全免费。

但是我们为每个新注册用户提供了 20万 token 的免费体验，此外我们的 Aivesa 免费体验版也在持续贴钱为大家提供上手体验。



#### 提问04：为什么站点经常变？

**回答04：**同样是因为不怀好意的人举报，此前的站点可能被污染，因此我们被迫采用 **发布页**+**落地页** 的方式防范。建议大家收藏发布页，关注我们的公众号，加入我们的群聊，避免站点被污染后找不到回家的路。

1. Aivesa 发布页（全球发布站）：[**https://aivesa.com**](https://aivesa.com)
2. AskOpenAI 发布页（大陆地区）：[**https://askopenai.cn**](https://askopenai.cn)
3. Aivesa 商店：[**https://sell.aivesa.store**](https://sell.aivesa.store)

![](https://askopenai.feishu.cn/space/api/box/stream/download/asynccode/?code=YTRlMzU0M2JmYmIyNzY0MDljNTIzZWIxNzlmMDZhNjNfczMwU25sRngwcG44eWpCckZ0Y3p1cUNlVWl4REpCbWdfVG9rZW46SmxPMmIzMWNlbzVTTnR4YUx4bmM5RzQwbjBjXzE2OTYyNjAyOTI6MTY5NjI2Mzg5Ml9WNA)



#### 提问05：API Key有什么用？

**回答05：**Aivesa 同样支持使用 **OpenAI 官方**的 API Key 使用，使用自己的 Key 意味着更稳定的服务，因为公用线路可能会遭遇余额用完，线路被禁用的情况，个人 Key 只要不被禁用就不会有这些问题。另外 API Key 还可以用于其他一些利用 OpenAI 官方的服务，比如接入 Siri：[https://github.com/ClarenceDan/chatGPT-Siri-Pro](https://github.com/ClarenceDan/chatGPT-Siri-Pro)

请注意：个人 Key当前每分钟只能调用三次。



#### 提问06：还有什么问题？

如果你还有问题，可以加入社群了解更多，点击加入 **🐧** [**QQ群**](https://sourl.cn/XFbJKM) 或 **🚀** [**TG群组**](https://t.me/+gJ-GQFE1GN40NGJl)

### 2.2 名词释义

> 以下为专有名词介绍，方便大家快速了解Aivesa

|||
|-|-|
|**名词概念**|**释义**|
|访问密码|网页上使用 Aivesa 需要用到访问密码，密码将在每次大更新后调整，目前请前往官方公众号：[**Aivesa**](https://sourl.cn/MHKm9r)，按照后台提示获取密码|
|API Key|当前 API Key 仅支持 OpenAI 官网的 KEY，可以前往官网生成 KEY：[https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys) 如果无法访问官网，也可以购买一个KEY：[https://sell.aivesa.store/](https://sell.aivesa.store/)|
|面具|面具是 Aivesa 2.0 的全新功能，意为给 Aivesa 带上面具，使用面具能快速让 Aivesa 扮演不同的角色，从而快速完成特定的任务，目前该功能还在持续完善|
|插件|插件是 Aivesa 3.0 的全新功能，Aivesa 可以通过插件实现特定功能，如访问网页、阅读和总结文档，甚至是操作表格或生成 PPT 等等，正在持续开发中。|
|token|Token 是 AI 文字生成的基本单位，通常 1 短单词 ≈ 1 token，1 汉字 ≈ 2 tokens，1 符号 = 1 token。最终 token消耗=倍率 x 实际消耗token|


