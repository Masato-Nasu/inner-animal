const AXES = {
  aesthetic: '雰囲気',
  practical: 'ちゃんと',
  safe: '受け止め',
  risk: '攻め',
  inner: '自分軸',
  outer: 'みんな軸',
  complete: '完成',
  becoming: '伸びしろ'
};

const ANIMAL_ORDER = ['ASIC','ASIB','ASOC','ASOB','ARIC','ARIB','AROC','AROB','PSIC','PSIB','PSOC','PSOB','PRIC','PRIB','PROC','PROB'];

const ANIMALS = {
  ASIC: {
    code: 'ASIC', key: 'cat', emoji: '🐱', animal: 'ネコ', name: 'こだわりネコ', subtitle: '好きな世界をきれいに守るタイプ',
    color: '#e8d8cf', accent: '#df8fa0',
    description: 'あなたは、自分の「好き」や「しっくりくる感じ」をとても大事にする人です。流行やまわりの声に流されるより、自分の中で納得できる美しさを選びます。静かに見えて、内側にはかなりはっきりしたこだわりがあります。',
    values: ['こだわり', '安心感', '自分の世界'], abandoned: ['勢い', 'みんなに合わせること', '未完成のまま出すこと']
  },
  ASIB: {
    code: 'ASIB', key: 'deer', emoji: '🦌', animal: 'シカ', name: 'やさしいシカ', subtitle: '繊細で、やさしく受け取るタイプ',
    color: '#d8e7d5', accent: '#9ebe9a',
    description: 'あなたは、目立つ強さよりも、空気の変化や小さな気持ちに気づける人です。無理に前へ出るより、相手や場所の雰囲気を大切にします。そのやさしさは、まわりの人にとって安心できる居場所になります。',
    values: ['やさしさ', '感受性', '安心できる距離'], abandoned: ['強い主張', '急な変化', '目立つこと']
  },
  ASOC: {
    code: 'ASOC', key: 'swan', emoji: '🦢', animal: 'ハクチョウ', name: 'センスのハクチョウ', subtitle: '美しく整えて人に見せられるタイプ',
    color: '#dbeafb', accent: '#d8b56f',
    description: 'あなたは、ただ目立つよりも、きれいに整っていることを大切にする人です。自分のセンスを、ちゃんと人に伝わる形にできます。上品さやバランス感覚があり、場の印象を自然に良くする力があります。',
    values: ['美しさ', 'バランス', '見せ方'], abandoned: ['荒さ', '行き当たりばったり', '強すぎる個性']
  },
  ASOB: {
    code: 'ASOB', key: 'rabbit', emoji: '🐰', animal: 'ウサギ', name: 'ふんわりウサギ', subtitle: 'やさしく場を明るくするタイプ',
    color: '#f8dce2', accent: '#df8fa0',
    description: 'あなたは、やわらかく人を惹きつけるタイプです。完璧にまとめるより、その場の空気を軽くしたり、相手を安心させたりする力があります。あなたがいると、少しだけ場がやさしくなります。',
    values: ['親しみやすさ', 'やわらかさ', '楽しい空気'], abandoned: ['厳しさ', '完璧主義', '強い対立']
  },
  ARIC: {
    code: 'ARIC', key: 'owl', emoji: '🦉', animal: 'フクロウ', name: '深読みフクロウ', subtitle: '静かに本質を見抜くタイプ',
    color: '#e3dbee', accent: '#a489bb',
    description: 'あなたは、物事を表面だけで判断しない人です。人が気づかない違和感や、言葉の奥にある意味を静かに読み取ります。すぐに動くより、よく見て、考えて、納得してから選ぶタイプです。',
    values: ['洞察', '静けさ', '深く考える時間'], abandoned: ['ノリだけの行動', '浅い説明', '早すぎる結論']
  },
  ARIB: {
    code: 'ARIB', key: 'fox', emoji: '🦊', animal: 'キツネ', name: '違和感キツネ', subtitle: '普通じゃない方に目がいくタイプ',
    color: '#f7d3bd', accent: '#e58e65',
    description: 'あなたは、みんながスルーする「なんか気になる」を拾える人です。無難な正解よりも、少し変だけど忘れられないものに惹かれます。その違和感は、新しいものを見つける力でもあります。',
    values: ['違和感', '余白', '自分の感覚'], abandoned: ['無難さ', 'わかりやすさ', 'すぐ役立つこと']
  },
  AROC: {
    code: 'AROC', key: 'snowleopard', emoji: '🐆', animal: 'ユキヒョウ', name: '攻めセンスのユキヒョウ', subtitle: '強い美意識で世界観を出すタイプ',
    color: '#dfe7f2', accent: '#839ab7',
    description: 'あなたは、ただかわいいだけ、ただ便利なだけでは物足りない人です。少し攻めた雰囲気や、強い世界観に惹かれます。人に見せる力もあり、自分のセンスを印象として残せるタイプです。',
    values: ['世界観', '強さ', '印象に残る表現'], abandoned: ['無難さ', '説明しすぎること', '平均点']
  },
  AROB: {
    code: 'AROB', key: 'otter', emoji: '🦦', animal: 'ラッコ', name: 'ひらめきラッコ', subtitle: 'ひらめきを軽やかに楽しむタイプ',
    color: '#d9edf1', accent: '#7aaeb9',
    description: 'あなたは、重く考えすぎず、面白そうな方へ自然に手を伸ばせる人です。まだ完成していないものや、ちょっと変なアイデアにもワクワクできます。軽やかなひらめきで、まわりの空気を楽しく変える力があります。',
    values: ['ひらめき', '遊び心', '変化'], abandoned: ['堅苦しさ', '完璧な計画', '退屈な正解']
  },
  PSIC: {
    code: 'PSIC', key: 'penguin', emoji: '🐧', animal: 'ペンギン', name: 'きっちりペンギン', subtitle: '落ち着いて正しく整えるタイプ',
    color: '#d8e0e8', accent: '#6e8290',
    description: 'あなたは、きちんとした状態や、安心できる流れを大切にする人です。派手ではなくても、必要なことを丁寧に積み上げられます。まわりから見ると、信頼できる存在として映りやすいタイプです。',
    values: ['安定', '丁寧さ', '信頼'], abandoned: ['雑な勢い', '危ない賭け', '急な変更']
  },
  PSIB: {
    code: 'PSIB', key: 'bee', emoji: '🐝', animal: 'ミツバチ', name: 'こつこつミツバチ', subtitle: 'やさしく積み上げるタイプ',
    color: '#fff1bb', accent: '#e2b44a',
    description: 'あなたは、小さな努力や、日々の積み重ねを大切にできる人です。いきなり大きく変えるより、少しずつ良くしていく方が得意です。そのやさしい継続力は、まわりに安心感を与えます。',
    values: ['積み重ね', '安心感', '小さな幸せ'], abandoned: ['派手な勝負', '雑な近道', '自分だけ目立つこと']
  },
  PSOC: {
    code: 'PSOC', key: 'dog', emoji: '🐶', animal: 'イヌ', name: 'みんなのイヌ', subtitle: '人のために自然に動けるタイプ',
    color: '#f0dfcb', accent: '#c79566',
    description: 'あなたは、自分だけでなく、まわりの人がどう感じるかを自然に考えられる人です。わかりやすさや使いやすさを大事にし、誰かの役に立つことに喜びを感じます。一緒にいると安心できる、親しみやすいタイプです。',
    values: ['親しみ', 'わかりやすさ', '役に立つこと'], abandoned: ['自分だけのこだわり', '強い反発', '伝わりにくさ']
  },
  PSOB: {
    code: 'PSOB', key: 'dolphin', emoji: '🐬', animal: 'イルカ', name: 'つなげるイルカ', subtitle: '人と人を軽やかにつなげるタイプ',
    color: '#d7edf4', accent: '#6cb3c7',
    description: 'あなたは、場の空気を読みながら、自然に人をつなげられるタイプです。重くなりすぎず、楽しい方向へ流れを作るのが得意です。変化にもやわらかく対応できる、軽やかなコミュニケーターです。',
    values: ['共有', '楽しさ', '軽やかなつながり'], abandoned: ['一人で抱えること', '固すぎるルール', '閉じた世界']
  },
  PRIC: {
    code: 'PRIC', key: 'hedgehog', emoji: '🦔', animal: 'ハリネズミ', name: '隠れ攻めハリネズミ', subtitle: 'おとなしく見えて芯が強いタイプ',
    color: '#e8dbc9', accent: '#9b7c62',
    description: 'あなたは、やさしく見えて、内側にはしっかりした強さを持つ人です。むやみに攻めるわけではありませんが、必要なときは自分の考えを守れます。静かな反骨心が、あなたらしさを支えています。',
    values: ['芯の強さ', '自分の守り方', '静かな攻め'], abandoned: ['迎合', '軽すぎるノリ', '自分を消すこと']
  },
  PRIB: {
    code: 'PRIB', key: 'tanuki', emoji: '🦝', animal: 'タヌキ', name: '即興タヌキ', subtitle: 'その場で形にする柔軟なタイプ',
    color: '#ead8c0', accent: '#a3784f',
    description: 'あなたは、考えすぎる前に一度やってみることができる人です。完璧な準備より、その場の流れを見ながら変えていくのが得意です。予想外の状況でも、なんとか形にしてしまう柔らかさがあります。',
    values: ['柔軟さ', 'その場の判断', '試してみる力'], abandoned: ['完璧な計画', '固定された正解', '慎重すぎる準備']
  },
  PROC: {
    code: 'PROC', key: 'wolf', emoji: '🐺', animal: 'オオカミ', name: '改革オオカミ', subtitle: 'ちゃんと変える力があるタイプ',
    color: '#d8dde4', accent: '#758391',
    description: 'あなたは、ただ壊すのではなく、必要なところを見極めて変えられる人です。実用性と攻めの感覚を両方持っていて、現実を動かす力があります。責任感のある強さが、あなたの魅力です。',
    values: ['改革', '判断力', '前に進む力'], abandoned: ['ぬるい妥協', '変わらない安心', '遠回しな表現']
  },
  PROB: {
    code: 'PROB', key: 'squirrel', emoji: '🐿️', animal: 'リス', name: '突破リス', subtitle: '小さく動いて突破口を見つけるタイプ',
    color: '#f0d9bd', accent: '#c9844e',
    description: 'あなたは、大きな一撃よりも、小さく動きながらチャンスを見つける人です。現実的だけど、じっとしているより試してみたいタイプ。小さな行動の積み重ねで、気づけば突破していることがあります。',
    values: ['行動力', '工夫', 'チャンスを拾う力'], abandoned: ['待つだけの時間', 'きれいすぎる計画', '失敗を恐れすぎること']
  }
};



const RESULT_DETAILS = {
  ASIC: {
    choice: '自分の中で「これは好き」と思える基準がはっきりしています。流行よりも、触れたときの質感や余白、落ち着く雰囲気を大切にします。人に合わせるより、自分の世界を静かに整えることで力が出るタイプです。',
    strength: '細部に気づく力と、好きなものを長く大切にする力があります。場を荒らさず、きれいに保つセンスがあるので、世界観づくりや整理された表現に向いています。',
    caution: 'こだわりが強いぶん、変化の早い場面では少し動き出しが遅くなることがあります。完璧に整う前に、小さく見せてみると可能性が広がります。',
    growth: '自分の好きな世界を守りつつ、ときどき外の空気を入れてみると、こだわりがもっと伝わりやすい魅力になります。'
  },
  ASIB: {
    choice: '強い刺激よりも、やさしい空気や安心できる距離を選びやすいタイプです。相手の表情や場の温度に敏感で、言葉になっていない気持ちも自然に受け取ります。',
    strength: '人を緊張させない雰囲気を持っています。繊細さは弱さではなく、小さな違和感や疲れに気づける大切な感度です。',
    caution: '相手を優先しすぎると、自分の本音が後回しになりがちです。嫌なことを嫌と言うだけでも、あなたのやさしさは壊れません。',
    growth: '安心できる場所を選びながら、少しだけ自分の希望を言葉にすると、やさしさに芯が出てきます。'
  },
  ASOC: {
    choice: '美しさと伝わりやすさの両方を大切にします。ただ目立つだけではなく、人に見せたときに整っていること、雰囲気がきれいに伝わることを選びます。',
    strength: 'センスを共有可能な形にできるのが強みです。写真、文章、服装、発表など、人から見えるものを自然に整えられます。',
    caution: 'きれいに見せようとするあまり、荒さや本音を隠しすぎることがあります。少しだけ抜けを残すと、より人間らしい魅力が出ます。',
    growth: '完成度を保ちつつ、意外な要素をひとつ混ぜると、上品さの中に強い印象が生まれます。'
  },
  ASOB: {
    choice: '場がやわらかくなる選択をしやすいタイプです。正しさや効率だけでなく、相手が安心できるか、みんなが入りやすい空気かを自然に見ています。',
    strength: '親しみやすく、周りの緊張をほどく力があります。あなたがいると、言いにくいことも少し言いやすくなるような雰囲気があります。',
    caution: '空気を悪くしないことを優先しすぎて、自分の意見を薄めてしまうことがあります。やわらかくても、意見を持って大丈夫です。',
    growth: 'ふんわりした魅力に、小さな決断力を足すと、人を安心させながら前に進める存在になります。'
  },
  ARIC: {
    choice: 'すぐに答えを出すより、意味を深く読もうとします。表面の楽しさだけでなく、その奥にある理由やズレを観察してから選ぶタイプです。',
    strength: '洞察力があります。人が見落とす矛盾や、言葉にされていない本音を拾えるため、企画・分析・創作の深い部分で力を発揮します。',
    caution: '考えすぎて、行動のタイミングを逃すことがあります。完璧に理解してから動くより、仮の答えで一歩進むことも大切です。',
    growth: '深く見る力に、少しだけ軽い行動を足すと、あなたの考えはもっと人に届きやすくなります。'
  },
  ARIB: {
    choice: '「普通に良い」よりも、「なんか気になる」を選びやすいタイプです。きれいに説明できない違和感や、まだ名前のない魅力に反応します。',
    strength: '新しいものを見つける感度があります。みんなが安心している場所より、少しズレた場所にある可能性を見つけるのが得意です。',
    caution: '独自の感覚が強いぶん、周りに伝えるときには少し翻訳が必要です。変さを消すのではなく、入口だけやさしくすると伝わりやすくなります。',
    growth: '違和感を大切にしながら、言葉や形にする力を足すと、あなたの感性はかなり強い武器になります。'
  },
  AROC: {
    choice: '安全にまとまるものより、強い印象を残すものを選びます。美意識がはっきりしていて、少し攻めた表現にも惹かれやすいタイプです。',
    strength: '人に見せる力があります。世界観、緊張感、かっこよさを扱うのが得意で、普通のものを一段印象的にできます。',
    caution: '強さが先に出すぎると、近寄りにくく見えることがあります。余白ややさしさを少し入れると、魅力がもっと広がります。',
    growth: '攻めたセンスを、伝わる形に整えるほど、ただ目立つだけではない説得力が生まれます。'
  },
  AROB: {
    choice: '計画通りよりも、ふと浮かんだ面白さを大切にします。完成しているものより、これから変わりそうなものにワクワクしやすいタイプです。',
    strength: '軽やかな発想力があります。場を楽しくしたり、固まった空気に新しい流れを作ったりするのが得意です。',
    caution: 'ひらめきが多いぶん、最後までまとめる前に次へ行きたくなることがあります。良いアイデアは小さくメモして残すと力になります。',
    growth: '遊び心に少しだけ継続力を足すと、思いつきがちゃんと人に届く形になります。'
  },
  PSIC: {
    choice: '安心できる形、続けられる仕組み、無理のない正解を選びやすいタイプです。勢いよりも、きちんと整っていることに信頼を置きます。',
    strength: '安定感があります。予定、役割、手順を整える力があり、周りから「任せると安心」と思われやすいタイプです。',
    caution: '想定外の変化に少し疲れやすいところがあります。全部を完璧に守ろうとせず、変わっても大丈夫な余白を作ると楽になります。',
    growth: 'きっちりした力に柔軟さを足すと、安心感を保ったまま新しいことにも対応できます。'
  },
  PSIB: {
    choice: '一気に変えるより、小さく積み上げる選択をします。目立つ成功より、毎日少しずつ良くなることに価値を感じるタイプです。',
    strength: '継続力と信頼感があります。小さな約束を守る、細かな気配りを重ねる、少しずつ改善することが得意です。',
    caution: 'まじめに積み上げるぶん、自分だけが頑張りすぎることがあります。たまには人に頼ることも、長く続けるための力です。',
    growth: 'こつこつ進む力に、自分を褒める習慣を足すと、やさしい努力がもっと続きやすくなります。'
  },
  PSOC: {
    choice: '自分だけの満足より、みんなに伝わることや役に立つことを選びます。相手が困らないか、使いやすいかを自然に考えるタイプです。',
    strength: '人に寄り添う実用性があります。説明、サポート、場づくりが得意で、一緒にいる人の不安を減らせます。',
    caution: '人に合わせることが多いと、自分の欲しいものが見えにくくなることがあります。自分の希望も、同じくらい大切にして大丈夫です。',
    growth: 'やさしさに自分の好みを少し足すと、ただ便利な人ではなく、魅力のある頼れる人になります。'
  },
  PSOB: {
    choice: '一人で抱えるより、人とつながりながら進む選択をします。楽しく共有できること、場が軽くなることを大切にするタイプです。',
    strength: 'コミュニケーションの流れを作る力があります。人と人の間に入り、空気をやわらげたり、話を前に進めたりできます。',
    caution: '外へ意識が向きやすいぶん、自分の疲れに気づくのが遅れることがあります。時々ひとりで静かに戻る時間も必要です。',
    growth: 'つなげる力に、自分の軸を少し意識すると、楽しいだけでなく信頼される存在になります。'
  },
  PRIC: {
    choice: '表面は落ち着いていても、内側にははっきりした判断があります。安全に見える道の中でも、自分が納得できないことには静かに抵抗します。',
    strength: '守る力と攻める力のバランスがあります。無理に目立たず、自分の芯を保ったまま必要な変化を選べます。',
    caution: '本音を内側にしまい込みすぎると、周りに伝わらないまま疲れてしまいます。小さくても意思表示をすると楽になります。',
    growth: '静かな強さを、言葉や行動で少し見せると、あなたの頼もしさがもっと伝わります。'
  },
  PRIB: {
    choice: '準備が完璧でなくても、まず動いてみることを選びます。その場で考え、変えながら進む柔軟さがあるタイプです。',
    strength: '即興力があります。予定外のことが起きても、なんとか形にしてしまう対応力があります。試作や新しい挑戦に向いています。',
    caution: '勢いで進むぶん、後から細部を整える作業が残りがちです。最後に少し確認する時間を作ると、完成度が上がります。',
    growth: '柔軟な実行力に、軽い振り返りを足すと、試したことがちゃんと次の成果につながります。'
  },
  PROC: {
    choice: '現実をきちんと見たうえで、必要なら変えることを選びます。やさしく流すより、問題を見極めて前に進めるタイプです。',
    strength: '判断力と実行力があります。理想だけで終わらせず、構造を変えたり、仕組みを作ったりする力があります。',
    caution: '前へ進める力が強いぶん、周りがついてきているかを見落とすことがあります。説明と余白を足すと、味方が増えます。',
    growth: '改革する力に、相手の安心を少し足すと、強さが怖さではなく信頼として伝わります。'
  },
  PROB: {
    choice: 'じっと待つより、小さく試して突破口を探します。大きな勝負より、動きながらチャンスを拾うタイプです。',
    strength: '行動の軽さと工夫する力があります。少ない材料でも試してみる、別の道を探す、素早く切り替えることが得意です。',
    caution: '動きが速いぶん、少し散らかりやすいところがあります。何を残すかを決めると、突破力がもっと活きます。',
    growth: '小さな行動を記録していくと、偶然の突破があなた自身の方法として積み上がります。'
  }
};

const QUESTIONS = [
  { text:'どちらの写真に心が動かされる？', a:'みんなに褒められるけど普通の写真', b:'少し変だけど忘れられない写真', scoreA:['practical','outer'], scoreB:['aesthetic','risk'] },
  { text:'新しい服を選ぶなら？', a:'失敗しにくくて長く着られる服', b:'ちょっと勇気がいるけど自分っぽい服', scoreA:['safe','complete'], scoreB:['risk','inner'] },
  { text:'友達に送るメッセージは？', a:'伝わりやすく、誤解されない文', b:'少し変だけど、気持ちがこもった文', scoreA:['practical','outer'], scoreB:['aesthetic','inner'] },
  { text:'放課後に行くなら？', a:'いつもの安心できるカフェ', b:'入ったことのない小さなお店', scoreA:['safe','complete'], scoreB:['risk','becoming'] },
  { text:'作品や投稿を出すタイミングは？', a:'ちゃんと整ってから出したい', b:'少し荒くても今出したい', scoreA:['complete','practical'], scoreB:['becoming','risk'] },
  { text:'褒められて嬉しいのは？', a:'わかりやすくて助かるね', b:'なんか雰囲気あるね', scoreA:['practical','outer'], scoreB:['aesthetic','inner'] },
  { text:'グループで決めるとき、自分は？', a:'みんなが納得できる案を探す', b:'ちょっと面白い案を出してみる', scoreA:['safe','outer'], scoreB:['risk','becoming'] },
  { text:'部屋を整えるなら？', a:'使いやすく、物の場所を決める', b:'好きなものが少し見える余白を残す', scoreA:['practical','complete'], scoreB:['aesthetic','becoming'] },
  { text:'旅行先を選ぶなら？', a:'評判が良くて安心な場所', b:'情報は少ないけど気になる場所', scoreA:['safe','outer'], scoreB:['risk','inner'] },
  { text:'誰かの相談を聞くときは？', a:'まず気持ちを受け止めたい', b:'解決策を一緒に考えたい', scoreA:['safe','aesthetic'], scoreB:['practical','outer'] },
  { text:'好きになりやすいものは？', a:'完成度が高くて美しいもの', b:'まだ未完成だけど可能性があるもの', scoreA:['aesthetic','complete'], scoreB:['becoming','risk'] },
  { text:'SNSに投稿するなら？', a:'みんなに伝わる投稿', b:'わかる人だけに刺さる投稿', scoreA:['outer','practical'], scoreB:['inner','aesthetic'] },
  { text:'新しいアプリを試すなら？', a:'使いやすくて評判がいいもの', b:'変だけど新しそうなもの', scoreA:['practical','safe'], scoreB:['risk','becoming'] },
  { text:'好きな言葉は？', a:'ちゃんと続ける', b:'とりあえず試す', scoreA:['practical','complete'], scoreB:['risk','becoming'] },
  { text:'プレゼントを選ぶなら？', a:'相手が本当に使えるもの', b:'その人らしさを感じるもの', scoreA:['practical','outer'], scoreB:['aesthetic','inner'] },
  { text:'初対面で大事にするのは？', a:'相手が安心できる空気', b:'自分らしさが少し伝わること', scoreA:['safe','outer'], scoreB:['inner','risk'] },
  { text:'予定が急に変わったら？', a:'まず落ち着いて整え直す', b:'その場で別の楽しみ方を探す', scoreA:['safe','practical'], scoreB:['risk','becoming'] },
  { text:'好きなノートは？', a:'きれいに整理されたノート', b:'落書きやメモが混ざったノート', scoreA:['practical','complete'], scoreB:['aesthetic','becoming'] },
  { text:'友達との関係で大事なのは？', a:'安心していられること', b:'新しい刺激をもらえること', scoreA:['safe','complete'], scoreB:['risk','becoming'] },
  { text:'自分の意見が少数派だったら？', a:'まず場の空気を見て伝え方を考える', b:'大事ならそのまま言ってみる', scoreA:['safe','outer'], scoreB:['risk','inner'] },
  { text:'かわいいと思うものは？', a:'きれいで整ったかわいさ', b:'ちょっと抜けているかわいさ', scoreA:['aesthetic','complete'], scoreB:['aesthetic','becoming'] },
  { text:'チームで役に立つなら？', a:'みんなが迷わないように整える', b:'新しい流れを作るきっかけになる', scoreA:['practical','outer'], scoreB:['risk','outer'] },
  { text:'一人の時間は？', a:'自分の世界を整える時間', b:'ぼんやり考えを育てる時間', scoreA:['inner','complete'], scoreB:['inner','becoming'] },
  { text:'失敗についてどう思う？', a:'できれば避けたいけど、次に活かす', b:'失敗から面白いことが生まれることもある', scoreA:['safe','practical'], scoreB:['risk','becoming'] },
  { text:'写真を加工するなら？', a:'自然にきれいに整える', b:'ちょっと世界観を足す', scoreA:['practical','complete'], scoreB:['aesthetic','risk'] },
  { text:'好きな褒め言葉は？', a:'一緒にいると安心する', b:'なんか目が離せない', scoreA:['safe','outer'], scoreB:['aesthetic','risk'] },
  { text:'買い物で迷ったら？', a:'長く使える方を選ぶ', b:'今の気分に合う方を選ぶ', scoreA:['practical','complete'], scoreB:['aesthetic','inner'] },
  { text:'話し合いで大事なのは？', a:'全員が納得できること', b:'本音がちゃんと出ること', scoreA:['safe','outer'], scoreB:['inner','risk'] },
  { text:'何かを始めるときは？', a:'まず流れを整理してから始める', b:'やりながら形にしていく', scoreA:['practical','complete'], scoreB:['risk','becoming'] },
  { text:'好きな場所は？', a:'静かで落ち着く場所', b:'人や情報が動いている場所', scoreA:['safe','inner'], scoreB:['outer','becoming'] },
  { text:'感動しやすいのは？', a:'丁寧に作られたもの', b:'少し荒いけど心があるもの', scoreA:['practical','complete'], scoreB:['aesthetic','becoming'] },
  { text:'友達に紹介するなら？', a:'誰でも楽しめるもの', b:'好みは分かれるけど刺さるもの', scoreA:['outer','practical'], scoreB:['inner','risk'] },
  { text:'自分らしいと思うのは？', a:'好きなものを大切に持ち続ける', b:'変わりながら好きなものを増やす', scoreA:['inner','complete'], scoreB:['inner','becoming'] },
  { text:'イベントに参加するなら？', a:'安心して楽しめるもの', b:'何が起きるかわからないもの', scoreA:['safe','outer'], scoreB:['risk','becoming'] },
  { text:'好きなデザインは？', a:'使いやすくて無駄がない', b:'見た瞬間に空気がある', scoreA:['practical','complete'], scoreB:['aesthetic','inner'] },
  { text:'人に見せるなら？', a:'ちゃんと伝わる完成形', b:'まだ途中だけど面白いもの', scoreA:['outer','complete'], scoreB:['risk','becoming'] },
  { text:'悩んだときは？', a:'信頼できる人に相談する', b:'一人でよく考えて決める', scoreA:['safe','outer'], scoreB:['inner','complete'] },
  { text:'好きなストーリーは？', a:'きれいにまとまる話', b:'余韻が残る話', scoreA:['complete','safe'], scoreB:['aesthetic','becoming'] },
  { text:'自分の強みはどちらに近い？', a:'安心感を作れる', b:'新しい空気を作れる', scoreA:['safe','outer'], scoreB:['risk','becoming'] },
  { text:'気になる言葉は？', a:'信頼', b:'可能性', scoreA:['safe','practical'], scoreB:['risk','becoming'] },
  { text:'好きな友達タイプは？', a:'いつも安定している人', b:'予想外で面白い人', scoreA:['safe','complete'], scoreB:['risk','becoming'] },
  { text:'選ぶときに大事なのは？', a:'後悔しにくいこと', b:'心が動くこと', scoreA:['safe','practical'], scoreB:['aesthetic','inner'] },
  { text:'一番避けたいのは？', a:'人を困らせること', b:'自分らしさをなくすこと', scoreA:['safe','outer'], scoreB:['inner','risk'] },
  { text:'未来に持っていきたいものは？', a:'ちゃんと続く仕組み', b:'まだ見たことのない可能性', scoreA:['practical','complete'], scoreB:['risk','becoming'] },
  { text:'見た目で惹かれるのは？', a:'すっきり整っているもの', b:'少しクセがあるもの', scoreA:['practical','complete'], scoreB:['aesthetic','risk'] },
  { text:'友達と遊ぶなら？', a:'みんなで安心して楽しめること', b:'ちょっと変な思い出になること', scoreA:['safe','outer'], scoreB:['risk','becoming'] },
  { text:'自分の世界は？', a:'静かに守りたい', b:'少しずつ変えていきたい', scoreA:['inner','complete'], scoreB:['inner','becoming'] },
  { text:'最後に選ぶなら？', a:'安心できる正解', b:'忘れられない可能性', scoreA:['safe','practical'], scoreB:['risk','aesthetic'] }
];

const COMPATIBILITY = {
  ASIC: { ARIC:92, PSIC:87, ASIB:85, PSOC:84, PSIB:83, ASOC:82, ARIB:82, ASOB:78, AROC:78, PRIC:78, AROB:68, PSOB:67, PRIB:65, PROC:63, PROB:58 },
  ASIB: { ASOB:95, PSIB:90, ARIB:89, ASIC:85, PSIC:84, ASOC:82, AROB:80, PSOB:79, ARIC:78, PRIB:77, AROC:69, PRIC:69, PSOC:66, PROB:63, PROC:58 },
  ASOC: { AROC:91, ASOB:87, ARIC:84, PSOC:84, ASIC:82, ASIB:82, PSIC:81, PROC:81, AROB:77, PSOB:76, PROB:69, PRIC:66, ARIB:65, PSIB:62, PRIB:58 },
  ASOB: { ASIB:95, AROB:89, PSOB:88, ASOC:87, PSOC:85, AROC:83, ARIB:82, PSIB:79, ASIC:78, PROB:77, PSIC:68, PROC:68, ARIC:62, PRIB:61, PRIC:58 },
  ARIC: { ASIC:92, ARIB:86, ASOC:84, AROC:83, PRIC:83, AROB:82, PROC:80, PRIB:79, ASIB:78, PSIC:77, PSOC:68, PSIB:67, PROB:65, ASOB:62, PSOB:58 },
  ARIB: { PRIB:93, ASIB:89, AROB:88, PRIC:87, ARIC:86, AROC:85, ASIC:82, ASOB:82, PSIB:78, PROB:76, PSIC:67, PROC:67, ASOC:65, PSOB:62, PSOC:58 },
  AROC: { PROC:93, ASOC:91, ARIB:85, AROB:85, ASOB:83, ARIC:83, PRIC:83, PSOC:80, ASIC:78, PROB:77, ASIB:69, PSIC:68, PSOB:63, PRIB:61, PSIB:58 },
  AROB: { PROB:93, ASOB:89, ARIB:88, PSOB:88, AROC:85, ARIC:82, PRIB:81, ASIB:80, PROC:79, ASOC:77, PSIB:69, ASIC:68, PRIC:64, PSOC:61, PSIC:58 },
  PSIC: { PSIB:94, PSOC:90, PRIC:89, ASIC:87, ASIB:84, PROC:83, ASOC:81, PSOB:78, ARIC:77, PRIB:76, ASOB:68, AROC:68, ARIB:67, PROB:62, AROB:58 },
  PSIB: { PSIC:94, ASIB:90, PSOB:89, PRIB:87, ASIC:83, PROB:82, PSOC:81, ASOB:79, PRIC:79, ARIB:78, AROB:69, ARIC:67, PROC:64, ASOC:62, AROC:58 },
  PSOC: { PSIC:90, PSOB:90, PROC:86, ASOB:85, ASIC:84, ASOC:84, PROB:83, PSIB:81, AROC:80, PRIC:80, ARIC:68, PRIB:67, ASIB:66, AROB:61, ARIB:58 },
  PSOB: { PSOC:90, PSIB:89, ASOB:88, AROB:88, PROB:87, PROC:81, PRIB:80, ASIB:79, PSIC:78, ASOC:76, ASIC:67, AROC:63, PRIC:63, ARIB:62, ARIC:58 },
  PRIC: { PSIC:89, PROC:89, ARIB:87, PRIB:86, ARIC:83, AROC:83, PSOC:80, PSIB:79, ASIC:78, PROB:77, ASIB:69, ASOC:66, AROB:64, PSOB:63, ASOB:58 },
  PRIB: { ARIB:93, PROB:90, PSIB:87, PRIC:86, AROB:81, PSOB:80, ARIC:79, ASIB:77, PSIC:76, PROC:76, PSOC:67, ASIC:65, ASOB:61, AROC:61, ASOC:58 },
  PROC: { AROC:93, PRIC:89, PROB:87, PSOC:86, PSIC:83, ASOC:81, PSOB:81, ARIC:80, AROB:79, PRIB:76, ASOB:68, ARIB:67, PSIB:64, ASIC:63, ASIB:58 },
  PROB: { AROB:93, PRIB:90, PSOB:87, PROC:87, PSOC:83, PSIB:82, ASOB:77, AROC:77, PRIC:77, ARIB:76, ASOC:69, ARIC:65, ASIB:63, PSIC:62, ASIC:58 }
};

let state = {
  screen: 'home',
  index: 0,
  answers: [],
  scores: emptyScores(),
  result: null
};

const app = document.querySelector('#app');
const backBtn = document.querySelector('#backBtn');
const homeBtn = document.querySelector('#homeBtn');

function emptyScores() {
  return Object.fromEntries(Object.keys(AXES).map(k => [k, 0]));
}

function saveState() {
  localStorage.setItem('innerAnimalState', JSON.stringify(state));
}

function loadSavedResult() {
  try { return JSON.parse(localStorage.getItem('innerAnimalResult') || 'null'); } catch { return null; }
}

const SCORE_KEYS = ['aesthetic','practical','safe','risk','inner','outer','complete','becoming'];

function encodeScores(scores) {
  return SCORE_KEYS.map(key => Number(scores?.[key] || 0)).join('.');
}

function decodeScores(value) {
  if (!value) return null;
  const parts = String(value).split('.').map(v => Number(v));
  if (parts.length !== SCORE_KEYS.length || parts.some(v => !Number.isFinite(v) || v < 0 || v > 48)) return null;
  return Object.fromEntries(SCORE_KEYS.map((key, i) => [key, parts[i]]));
}

function defaultScoresForCode(code) {
  const scores = emptyScores();
  const letters = String(code || '').toUpperCase().split('');
  if (letters[0] === 'A') { scores.aesthetic = 7; scores.practical = 5; }
  else { scores.aesthetic = 5; scores.practical = 7; }
  if (letters[1] === 'S') { scores.safe = 7; scores.risk = 5; }
  else { scores.safe = 5; scores.risk = 7; }
  if (letters[2] === 'I') { scores.inner = 7; scores.outer = 5; }
  else { scores.inner = 5; scores.outer = 7; }
  if (letters[3] === 'C') { scores.complete = 7; scores.becoming = 5; }
  else { scores.complete = 5; scores.becoming = 7; }
  return scores;
}

function makeResultFromCode(code, scores = null, options = {}) {
  const safeCode = String(code || '').toUpperCase();
  if (!ANIMALS[safeCode]) return null;
  const finalScores = scores || defaultScoresForCode(safeCode);
  return {
    code: safeCode,
    scores: finalScores,
    meters: getMeters(finalScores),
    animal: ANIMALS[safeCode],
    compatibility: getCompatibility(safeCode),
    answers: [],
    shared: Boolean(options.shared),
    createdAt: new Date().toISOString()
  };
}

function loadResultFromURL() {
  const params = new URLSearchParams(location.search);
  const code = params.get('result') || params.get('animal') || params.get('type');
  if (!code) return null;
  return makeResultFromCode(code, decodeScores(params.get('s')), { shared: true });
}

function baseURL() {
  const path = location.pathname.endsWith('/index.html')
    ? location.pathname.replace(/index\.html$/, '')
    : location.pathname;
  const url = new URL(location.origin + path);
  url.search = '';
  url.hash = '';
  return url;
}

function makeResultURL(result) {
  const url = baseURL();
  url.searchParams.set('result', result.code);
  url.searchParams.set('s', encodeScores(result.scores));
  return url.toString();
}

function makeAppURL() {
  return baseURL().toString();
}

function clearResultURLParams() {
  if (location.search) {
    const url = new URL(location.href);
    if (url.searchParams.has('result') || url.searchParams.has('animal') || url.searchParams.has('type')) {
      url.search = '';
      history.replaceState(null, '', url.toString());
    }
  }
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  }, 1900);
}

function render() {
  document.title = state.result?.animal?.name ? `INNER ANIMAL | ${state.result.animal.name}` : 'INNER ANIMAL';
  backBtn.style.visibility = state.screen === 'home' ? 'hidden' : 'visible';
  homeBtn.style.visibility = state.screen === 'home' ? 'hidden' : 'visible';
  if (state.screen === 'home') renderHome();
  if (state.screen === 'question') renderQuestion();
  if (state.screen === 'result') renderResult(state.result);
  if (state.screen === 'compatibility') renderCompatibility(state.result);
  if (state.screen === 'animals') renderAnimals();
  if (state.screen === 'share') renderShare(state.result);
}

function renderHome() {
  const template = document.querySelector('#homeTemplate');
  app.innerHTML = '';
  app.appendChild(template.content.cloneNode(true));
  document.querySelector('#heroAnimals').innerHTML = ['fox','cat','rabbit'].map(key => `<div class="animal-badge">${animalSVG(key)}</div>`).join('');
  document.querySelector('#startBtn').addEventListener('click', startQuiz);
  document.querySelector('#animalsBtn').addEventListener('click', () => { state.screen = 'animals'; render(); });
  const saved = loadSavedResult();
  const resume = document.querySelector('#resumeBtn');
  if (saved) {
    resume.hidden = false;
    resume.addEventListener('click', () => { state.result = saved; state.screen = 'result'; render(); });
  } else {
    resume.hidden = true;
  }
}

function startQuiz() {
  clearResultURLParams();
  state = { screen: 'question', index: 0, answers: [], scores: emptyScores(), result: null };
  saveState();
  render();
}

function renderQuestion() {
  const q = QUESTIONS[state.index];
  const current = state.index + 1;
  const total = QUESTIONS.length;
  const remaining = total - current;
  const progress = Math.round((current / total) * 100);
  app.innerHTML = `
    <section class="question-status card" aria-label="現在の質問数">
      <div class="question-status-main">
        <span class="question-status-label">今の質問</span>
        <strong>質問 ${current} / ${total}</strong>
      </div>
      <div class="question-status-sub">${remaining === 0 ? 'これが最後の質問です' : `あと ${remaining} 問`}</div>
    </section>
    <section class="progress-wrap" aria-label="進捗">
      <div class="progress-row"><span>${progress}% 完了</span><span>${current} / ${total}</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
    </section>
    <section class="question-card card">
      <div class="question-card-kicker">QUESTION ${String(current).padStart(2,'0')}</div>
      <h2>${escapeHTML(q.text)}</h2>
      <div class="choice-list">
        <button class="choice-btn a" type="button" data-choice="A"><span class="choice-mark">A</span><span class="choice-text">${escapeHTML(q.a)}</span></button>
        <button class="choice-btn b" type="button" data-choice="B"><span class="choice-mark">B</span><span class="choice-text">${escapeHTML(q.b)}</span></button>
      </div>
      <div class="quiz-footer">
        <button class="secondary-btn" type="button" id="prevQuestion">ひとつ戻る</button>
        <button class="secondary-btn" type="button" id="restartQuiz">最初から</button>
      </div>
    </section>
  `;
  app.querySelectorAll('.choice-btn').forEach(btn => btn.addEventListener('click', () => choose(btn.dataset.choice)));
  app.querySelector('#prevQuestion').addEventListener('click', prevQuestion);
  app.querySelector('#restartQuiz').addEventListener('click', startQuiz);
}

function choose(choice) {
  const q = QUESTIONS[state.index];
  const scoreKeys = choice === 'A' ? q.scoreA : q.scoreB;
  scoreKeys.forEach(k => state.scores[k]++);
  state.answers.push(choice);
  if (state.index < QUESTIONS.length - 1) {
    state.index++;
    saveState();
    render();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  if (state.index === 0 || state.answers.length === 0) return;
  const lastChoice = state.answers.pop();
  state.index--;
  const q = QUESTIONS[state.index];
  const keys = lastChoice === 'A' ? q.scoreA : q.scoreB;
  keys.forEach(k => state.scores[k] = Math.max(0, state.scores[k] - 1));
  saveState();
  render();
}

function finishQuiz() {
  const result = calculateResult(state.scores, state.answers);
  state.result = result;
  state.screen = 'result';
  localStorage.setItem('innerAnimalResult', JSON.stringify(result));
  saveState();
  render();
}

function calculateResult(scores, answers) {
  const code = [
    pickAxis(scores, 'aesthetic', 'practical', 'A', 'P', 'A'),
    pickAxis(scores, 'safe', 'risk', 'S', 'R', 'S'),
    pickAxis(scores, 'inner', 'outer', 'I', 'O', 'I'),
    pickAxis(scores, 'complete', 'becoming', 'C', 'B', 'B')
  ].join('');
  const animal = ANIMALS[code] || ANIMALS.ARIB;
  const meters = getMeters(scores);
  const compatibility = getCompatibility(code);
  return { code, scores, meters, animal, compatibility, answers, createdAt: new Date().toISOString() };
}

function pickAxis(scores, leftKey, rightKey, leftLetter, rightLetter, tieLetter) {
  if (scores[leftKey] === scores[rightKey]) return tieLetter;
  return scores[leftKey] > scores[rightKey] ? leftLetter : rightLetter;
}

function ratio(scores, a, b, fallbackLabel) {
  const total = scores[a] + scores[b] || 1;
  const win = scores[a] >= scores[b] ? a : b;
  return { key: win, label: AXES[win] || fallbackLabel, percent: Math.round((scores[win] / total) * 100) };
}

function getMeters(scores) {
  return [
    ratio(scores, 'aesthetic', 'practical'),
    ratio(scores, 'safe', 'risk'),
    ratio(scores, 'inner', 'outer'),
    ratio(scores, 'complete', 'becoming')
  ];
}

function getCompatibility(code) {
  const table = COMPATIBILITY[code] || {};
  return Object.entries(table)
    .map(([targetCode, percent]) => ({ animal: ANIMALS[targetCode], code: targetCode, percent, comment: compatibilityComment(percent) }))
    .sort((a,b) => b.percent - a.percent);
}

function compatibilityComment(percent) {
  if (percent >= 90) return '自然体でいられる相手。考え方が近く、一緒にいると安心できます。';
  if (percent >= 80) return 'かなり相性のいい相手。似ている部分と違う部分のバランスが心地いい組み合わせです。';
  if (percent >= 70) return '楽しく付き合える相手。少し違いはありますが、その違いが良い刺激になります。';
  if (percent >= 60) return '視点が違う相手。最初は少し戸惑っても、学びや発見が生まれやすい関係です。';
  return 'かなり違うタイプ。だからこそ、自分にはない考え方を教えてくれる相手です。';
}

function renderResult(result) {
  if (!result) { state.screen = 'home'; render(); return; }
  const animal = result.animal;
  const best = result.compatibility.slice(0, 3);
  app.innerHTML = `
    <section class="result-card card">
      <p class="result-eyebrow">あなたのINNER ANIMALは…</p>
      <h1 class="result-title">${escapeHTML(animal.name)}</h1>
      <span class="result-subtitle">${escapeHTML(animal.subtitle)}</span>
      <div class="animal-stage"><div class="animal-badge">${animalSVG(animal.key)}</div></div>
      <p class="result-desc">${escapeHTML(animal.description)}</p>
      ${result.shared ? sharedResultCtaTemplate(result) : ''}
      <div class="meter-list">
        ${result.meters.map(meterTemplate).join('')}
      </div>
      <div class="info-grid">
        <div class="info-box"><h3>大事にしているもの</h3><p>${animal.values.map(escapeHTML).join(' / ')}</p></div>
        <div class="info-box"><h3>手放しがちなもの</h3><p>${animal.abandoned.map(escapeHTML).join(' / ')}</p></div>
      </div>
      ${detailTemplate(result)}
    </section>

    <section class="compat-card card">
      <div class="section-title"><h2>なかよし相性 BEST 3</h2><span>相性は友達・創作・チーム向け</span></div>
      <div class="compat-list">
        ${best.map(item => compatItemTemplate(item, true)).join('')}
      </div>
      <div class="action-stack">
        <button class="secondary-btn" id="showCompatibility" type="button">すべての相性を見る</button>
        <button class="secondary-btn" id="showAnimals" type="button">16のアニマルを見る</button>
        <div class="action-row">
          <button class="primary-btn" id="saveCard" type="button">結果カード保存</button>
          <button class="secondary-btn" id="shareResult" type="button">結果をシェア</button>
        </div>
        <button class="secondary-btn" id="copyResultURL" type="button">結果URLをコピー</button>
        <button class="secondary-btn" id="shareApp" type="button">アプリをシェア</button>
      </div>
    </section>
  `;
  const tryFromShared = app.querySelector('#tryFromShared');
  if (tryFromShared) tryFromShared.addEventListener('click', startQuiz);
  app.querySelector('#showCompatibility').addEventListener('click', () => { state.screen = 'compatibility'; render(); });
  app.querySelector('#showAnimals').addEventListener('click', () => { state.screen = 'animals'; render(); });
  app.querySelector('#saveCard').addEventListener('click', () => saveResultCard(result));
  app.querySelector('#shareResult').addEventListener('click', () => shareResult(result));
  app.querySelector('#copyResultURL').addEventListener('click', () => copyResultURL(result));
  app.querySelector('#shareApp').addEventListener('click', shareApp);
}

function meterTemplate(m) {
  return `<div class="meter-row"><span>${escapeHTML(m.label)}</span><div class="meter-bar"><div class="meter-fill" style="width:${m.percent}%"></div></div><span>${m.percent}%</span></div>`;
}

function sharedResultCtaTemplate(result) {
  return `<section class="shared-result-cta" aria-label="共有された結果から診断を始める">
    <div>
      <strong>この結果を見ています</strong>
      <p>${escapeHTML(result.animal.name)}の結果を受け取りました。あなたのINNER ANIMALも診断できます。</p>
    </div>
    <button class="primary-btn" id="tryFromShared" type="button">自分も診断する</button>
  </section>`;
}


function compatItemTemplate(item, showComment = false) {
  return `<article class="compat-item">
    <div class="compat-mini animal-badge">${animalSVG(item.animal.key)}</div>
    <div><strong>${escapeHTML(item.animal.name)}</strong>${showComment ? `<small>${escapeHTML(item.comment)}</small>` : ''}</div>
    <div class="percent">${item.percent}%</div>
  </article>`;
}


function detailTemplate(result) {
  const detail = RESULT_DETAILS[result.code];
  if (!detail) return '';
  return `<section class="deep-result" aria-label="詳しい診断結果">
    <div class="section-title compact"><h2>詳しい診断</h2><span>選び方のクセ</span></div>
    <article class="detail-box"><h3>選び方のクセ</h3><p>${escapeHTML(detail.choice)}</p></article>
    <article class="detail-box"><h3>強み</h3><p>${escapeHTML(detail.strength)}</p></article>
    <article class="detail-box"><h3>気をつけたいこと</h3><p>${escapeHTML(detail.caution)}</p></article>
    <article class="detail-box"><h3>伸ばすと良いところ</h3><p>${escapeHTML(detail.growth)}</p></article>
  </section>`;
}

function axisTextFromCode(code) {
  const c = String(code || '');
  const one = c[0] === 'A' ? '雰囲気' : 'ちゃんと';
  const two = c[1] === 'S' ? '受け止め' : '攻め';
  const three = c[2] === 'I' ? '自分軸' : 'みんな軸';
  const four = c[3] === 'C' ? '完成' : '伸びしろ';
  return `${one} / ${two} / ${three} / ${four}`;
}

function renderAnimals() {
  app.innerHTML = `
    <section class="animals-page card">
      <p class="result-eyebrow">INNER ANIMAL TYPE LIST</p>
      <h1 class="animals-title">16のアニマル</h1>
      <p class="animals-lead">どのタイプも、ちゃんと良いところがあります。自分の結果だけでなく、友達や相性の動物もここで見られます。</p>
      <div class="animals-grid">
        ${ANIMAL_ORDER.map(code => animalCardTemplate(ANIMALS[code])).join('')}
      </div>
      <div class="action-stack">
        <button class="primary-btn" id="startFromAnimals" type="button">診断をはじめる</button>
        ${state.result ? '<button class="secondary-btn" id="backToResultFromAnimals" type="button">結果に戻る</button>' : ''}
      </div>
    </section>
  `;
  app.querySelectorAll('[data-animal-code]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.result = makeResultFromCode(btn.dataset.animalCode);
      state.screen = 'result';
      render();
    });
  });
  app.querySelector('#startFromAnimals').addEventListener('click', startQuiz);
  const back = app.querySelector('#backToResultFromAnimals');
  if (back) back.addEventListener('click', () => { state.screen = 'result'; render(); });
}

function animalCardTemplate(animal) {
  return `<article class="animal-type-card">
    <div class="animal-type-visual animal-badge">${animalSVG(animal.key)}</div>
    <div class="animal-type-body">
      <div class="animal-type-head"><span>${escapeHTML(animal.emoji)}</span><strong>${escapeHTML(animal.name)}</strong></div>
      <p>${escapeHTML(animal.subtitle)}</p>
      <small>${escapeHTML(axisTextFromCode(animal.code))}</small>
      <button class="tiny-btn" type="button" data-animal-code="${escapeHTML(animal.code)}">詳しく見る</button>
    </div>
  </article>`;
}

function renderCompatibility(result) {
  if (!result) { state.screen = 'home'; render(); return; }
  app.innerHTML = `
    <section class="compat-card card">
      <div class="section-title"><h2>${escapeHTML(result.animal.name)}の<br>すべての相性</h2><span>全15タイプ</span></div>
      <div class="compat-list">${result.compatibility.map(item => compatItemTemplate(item, true)).join('')}</div>
      <div class="action-stack">
        <button class="primary-btn" id="shareCompatibility" type="button">相性BEST3をシェア</button>
        <button class="secondary-btn" id="backResult" type="button">結果に戻る</button>
      </div>
    </section>
  `;
  app.querySelector('#backResult').addEventListener('click', () => { state.screen = 'result'; render(); });
  app.querySelector('#shareCompatibility').addEventListener('click', () => shareResult(result));
}

function renderShare(result) {
  if (!result) { state.screen = 'home'; render(); return; }
  const animal = result.animal;
  const best = result.compatibility.slice(0, 3);
  app.innerHTML = `
    <section class="result-card card">
      <div class="share-card-preview" id="sharePreview">
        <p class="share-title">INNER ANIMAL</p>
        <h1 class="share-animal-name">${escapeHTML(animal.name)}</h1>
        <div class="share-subtitle">${escapeHTML(animal.subtitle)}</div>
        <div class="animal-badge">${animalSVG(animal.key)}</div>
        <div class="best-mini">なかよし相性 BEST 3<br>${best.map((b,i)=>`${i+1}. ${b.animal.name} ${b.percent}%`).join('<br>')}</div>
      </div>
      <div class="action-stack">
        <button class="primary-btn" id="saveCard2" type="button">カードを保存</button>
        <button class="secondary-btn" id="shareResult2" type="button">結果をシェア</button>
        <button class="secondary-btn" id="copyResultURL2" type="button">結果URLをコピー</button>
        <button class="secondary-btn" id="shareApp2" type="button">アプリをシェア</button>
      </div>
    </section>
  `;
  app.querySelector('#saveCard2').addEventListener('click', () => saveResultCard(result));
  app.querySelector('#shareResult2').addEventListener('click', () => shareResult(result));
  app.querySelector('#copyResultURL2').addEventListener('click', () => copyResultURL(result));
  app.querySelector('#shareApp2').addEventListener('click', shareApp);
}

async function writeClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) {}
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    textarea.remove();
    return ok;
  } catch (e) {
    return false;
  }
}

async function shareText(payload) {
  if (navigator.share) {
    try {
      await navigator.share(payload);
      return;
    } catch (e) {
      if (e.name === 'AbortError') return;
    }
  }
  await writeClipboard([payload.title, payload.text, payload.url].filter(Boolean).join('\n'));
  showToast('シェア文をコピーしました');
}

function resultShareText(result) {
  const best = result.compatibility.slice(0, 3);
  return `私のINNER ANIMALは\n${result.animal.name} でした。\n\nなかよし相性BEST3\n${best.map(b => `${b.animal.emoji} ${b.animal.animal} ${b.percent}%`).join('\n')}\n\n#INNERANIMAL #動物タイプ診断`;
}

function resultSharePayload(result) {
  const url = makeResultURL(result);
  return {
    title: `INNER ANIMAL | ${result.animal.name}`,
    text: `${resultShareText(result)}\n\n結果URL:\n${url}`,
    url
  };
}

async function copyResultURL(result) {
  const payload = resultSharePayload(result);
  const text = `${payload.title}\n${payload.text}`;
  const ok = await writeClipboard(text);
  if (ok) showToast('結果URLをコピーしました');
  else showResultSharePanel(result, 'コピーできない場合は、下のURLを長押し/選択してコピーしてください。');
}

async function shareResult(result) {
  const payload = resultSharePayload(result);

  // Windows / Edge の共有シートはクエリ付きURLを見た目上ルートURLに丸めて表示することがあるため、
  // ここではOS共有を直接開かず、必ず「結果専用URL」を画面に表示する。
  await writeClipboard(payload.url);
  showResultSharePanel(result, '結果URLをコピーしました。このURLを送ると、同じ結果画面が開きます。');
}

function showResultSharePanel(result, message = '') {
  const payload = resultSharePayload(result);
  const existing = document.querySelector('.share-panel-backdrop');
  if (existing) existing.remove();

  const panel = document.createElement('div');
  panel.className = 'share-panel-backdrop';
  panel.innerHTML = `
    <div class="share-panel" role="dialog" aria-modal="true" aria-label="結果をシェア">
      <button class="share-panel-close" type="button" aria-label="閉じる">×</button>
      <p class="result-eyebrow">結果をシェア</p>
      <h2>${escapeHTML(result.animal.name)}</h2>
      <p>${escapeHTML(message)}</p>
      <label class="share-url-label" for="shareURLBox">結果専用URL</label>
      <textarea id="shareURLBox" class="share-url-box" readonly>${escapeHTML(payload.url)}</textarea>
      <p class="share-url-note">※ 末尾の <strong>?result=...</strong> まで含めて共有してください。</p>
      <div class="action-stack">
        <button class="primary-btn" id="copyShareURL" type="button">結果URLをコピー</button>
        <button class="secondary-btn" id="copyShareText" type="button">結果文＋URLをコピー</button>
        <button class="secondary-btn" id="systemShareResult" type="button">共有シートを開く</button>
      </div>
    </div>
  `;
  document.body.appendChild(panel);
  const close = () => panel.remove();
  panel.querySelector('.share-panel-close').addEventListener('click', close);
  panel.addEventListener('click', e => { if (e.target === panel) close(); });
  panel.querySelector('#copyShareURL').addEventListener('click', async () => {
    await writeClipboard(payload.url);
    showToast('結果URLをコピーしました');
  });
  panel.querySelector('#copyShareText').addEventListener('click', async () => {
    await writeClipboard(`${payload.title}\n${payload.text}`);
    showToast('結果文＋URLをコピーしました');
  });
  panel.querySelector('#systemShareResult').addEventListener('click', async () => {
    if (!navigator.share) {
      await writeClipboard(`${payload.title}\n${payload.text}`);
      showToast('結果文＋URLをコピーしました');
      return;
    }
    try {
      await navigator.share(payload);
    } catch (e) {
      if (e.name !== 'AbortError') {
        await writeClipboard(`${payload.title}\n${payload.text}`);
        showToast('結果文＋URLをコピーしました');
      }
    }
  });
  const box = panel.querySelector('#shareURLBox');
  box.focus();
  box.select();
}

async function copyResultText(result) {
  await writeClipboard(resultShareText(result));
}

function shareApp() {
  shareText({
    title: 'INNER ANIMAL',
    text: '48問の2択で、自分の中の動物タイプがわかる診断。\n#INNERANIMAL #動物タイプ診断',
    url: makeAppURL()
  });
}

async function createResultCardCanvas(result) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext('2d');
  const animal = result.animal;
  const best = result.compatibility.slice(0,3);

  ctx.fillStyle = '#fffaf3';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  drawBlob(ctx, 160, 170, 250, '#f8dce2');
  drawBlob(ctx, 910, 300, 230, '#d8e7d5');
  drawBlob(ctx, 900, 1120, 320, '#fff1bb');

  ctx.strokeStyle = 'rgba(216,181,111,.55)';
  ctx.lineWidth = 4;
  roundRect(ctx, 52, 52, 976, 1246, 54, true, false);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#4d3d35';
  ctx.font = '700 54px Georgia, serif';
  ctx.fillText('INNER ANIMAL', 540, 150);
  ctx.font = '500 28px sans-serif';
  ctx.fillStyle = '#8a746b';
  ctx.fillText('あなたの中の動物がわかる診断', 540, 198);

  ctx.font = '900 72px sans-serif';
  ctx.fillStyle = '#4d3d35';
  wrapCanvasText(ctx, animal.name, 540, 292, 880, 82);
  ctx.font = '700 30px sans-serif';
  ctx.fillStyle = animal.accent || '#df8fa0';
  ctx.fillText(animal.subtitle, 540, 366);

  const svgURL = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(animalSVG(animal.key, 420));
  const img = await loadImage(svgURL);
  ctx.drawImage(img, 330, 405, 420, 420);

  let y = 875;
  ctx.textAlign = 'left';
  ctx.font = '800 28px sans-serif';
  ctx.fillStyle = '#4d3d35';
  ctx.fillText('あなたの選び方', 120, y);
  y += 34;
  result.meters.forEach((m, i) => {
    const yy = y + i * 54;
    ctx.font = '700 25px sans-serif';
    ctx.fillStyle = '#4d3d35';
    ctx.fillText(m.label, 120, yy + 24);
    ctx.fillStyle = 'rgba(232,219,205,.85)';
    roundRect(ctx, 270, yy, 520, 18, 9, false, true);
    const grad = ctx.createLinearGradient(270, yy, 790, yy);
    grad.addColorStop(0, '#df8fa0');
    grad.addColorStop(1, '#7ead8b');
    ctx.fillStyle = grad;
    roundRect(ctx, 270, yy, 520 * (m.percent/100), 18, 9, false, true);
    ctx.font = '800 25px sans-serif';
    ctx.fillStyle = '#df8fa0';
    ctx.fillText(`${m.percent}%`, 820, yy + 24);
  });

  y += 245;
  ctx.font = '800 28px sans-serif';
  ctx.fillStyle = '#4d3d35';
  ctx.fillText('なかよし相性 BEST 3', 120, y);
  y += 46;
  ctx.font = '700 30px sans-serif';
  best.forEach((b, i) => {
    ctx.fillStyle = '#4d3d35';
    ctx.fillText(`${i+1}. ${b.animal.animal}`, 140, y + i * 42);
    ctx.fillStyle = '#df8fa0';
    ctx.fillText(`${b.percent}%`, 760, y + i * 42);
  });

  ctx.textAlign = 'center';
  ctx.font = '700 24px sans-serif';
  ctx.fillStyle = '#8a746b';
  ctx.fillText('#INNERANIMAL #動物タイプ診断', 540, 1246);

  return canvas;
}

function canvasToBlob(canvas) {
  return new Promise(resolve => canvas.toBlob(resolve, 'image/png', 0.95));
}

async function saveResultCard(result) {
  const canvas = await createResultCardCanvas(result);
  const link = document.createElement('a');
  link.download = `inner-animal-${result.animal.key}-${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('結果カードを保存しました');
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function drawBlob(ctx, x, y, r, color) {
  ctx.save();
  ctx.globalAlpha = .65;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2);
  ctx.fill();
  ctx.restore();
}

function roundRect(ctx, x, y, w, h, r, stroke = false, fill = false) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = [...text];
  let line = '';
  let lines = [];
  chars.forEach(ch => {
    const test = line + ch;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = ch;
    } else line = test;
  });
  if (line) lines.push(line);
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
}

function escapeHTML(str) {
  return String(str).replace(/[&<>'"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]));
}

function animalSVG(key, size = 240) {
  const animalByKey = Object.values(ANIMALS).find(a => a.key === key) || ANIMALS.ARIB;
  const bg = animalByKey.color || '#f7d3bd';
  const accent = animalByKey.accent || '#df8fa0';
  const base = `<svg class="animal-svg ${key}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="${animalByKey.animal}">
    <defs><filter id="s" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#7b5a4a" flood-opacity=".12"/></filter></defs>
    <circle cx="120" cy="120" r="104" fill="${bg}" opacity=".82"/>
    <circle cx="61" cy="58" r="7" fill="#fff" opacity=".62"/><circle cx="181" cy="70" r="5" fill="#fff" opacity=".62"/><path d="M58 181c38 18 86 18 124 0" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".38"/>`;
  const end = `<circle cx="82" cy="95" r="5" fill="#4d3d35"/><circle cx="158" cy="95" r="5" fill="#4d3d35"/><path d="M103 132c10 8 24 8 34 0" fill="none" stroke="#4d3d35" stroke-width="5" stroke-linecap="round"/><circle cx="92" cy="119" r="9" fill="#f2bfc8" opacity=".75"/><circle cx="148" cy="119" r="9" fill="#f2bfc8" opacity=".75"/><path d="M120 205c20-6 38-18 52-34" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" opacity=".45"/></svg>`;

  const commonFace = (faceColor, earColor = faceColor, extra = '') => `${base}<g filter="url(#s)">${extra}<circle cx="120" cy="112" r="60" fill="${faceColor}"/><path d="M95 136c17 12 33 12 50 0" fill="none" stroke="#4d3d35" stroke-width="5" stroke-linecap="round"/></g>${end.replace('<circle cx="82"','<circle cx="86"').replace('<circle cx="158"','<circle cx="154"')}`;

  switch(key) {
    case 'cat': return `${base}<g filter="url(#s)"><path d="M72 76 86 31l36 38 36-38 14 45" fill="#8f9699"/><circle cx="120" cy="113" r="61" fill="#f5f0ea"/><path d="M65 100c24-18 86-20 111 0" fill="#8f9699" opacity=".72"/><path d="M73 125h-28M74 138H48M167 125h28M166 138h26" stroke="#8a746b" stroke-width="4" stroke-linecap="round"/><circle cx="92" cy="110" r="7" fill="#4d3d35"/><circle cx="148" cy="110" r="7" fill="#4d3d35"/><path d="M120 124l-8 7h16z" fill="#d88c98"/><path d="M105 145c9 6 21 6 30 0" fill="none" stroke="#4d3d35" stroke-width="5" stroke-linecap="round"/></g></svg>`;
    case 'deer': return `${base}<g filter="url(#s)"><path d="M83 75c-22-40-32-40-40-66M157 75c22-40 32-40 40-66M82 55 58 38M158 55l24-17" fill="none" stroke="#9b7c62" stroke-width="8" stroke-linecap="round"/><path d="M76 91c-18-13-34-10-41 4 17 1 30 10 37 22" fill="#c99665"/><path d="M164 91c18-13 34-10 41 4-17 1-30 10-37 22" fill="#c99665"/><ellipse cx="120" cy="116" rx="58" ry="67" fill="#d6a66e"/><ellipse cx="120" cy="143" rx="34" ry="25" fill="#fff2df"/><circle cx="96" cy="109" r="6" fill="#4d3d35"/><circle cx="144" cy="109" r="6" fill="#4d3d35"/><path d="M120 127l-8 6h16z" fill="#5b453d"/><circle cx="91" cy="72" r="5" fill="#fff5e6"/><circle cx="147" cy="74" r="5" fill="#fff5e6"/><path d="M106 151c8 6 20 6 28 0" stroke="#4d3d35" stroke-width="5" stroke-linecap="round" fill="none"/></g></svg>`;
    case 'swan': return `${base}<g filter="url(#s)"><path d="M101 165c-43 0-67-27-65-57 35 26 72 23 100 5 24-15 37-43 29-70-13 13-22 35-14 58 9 27 39 28 53 16 1 31-34 48-103 48z" fill="#fff"/><path d="M164 49c16 3 25 10 29 20l-27 2" fill="#e9a25a"/><circle cx="160" cy="61" r="4" fill="#4d3d35"/><path d="M87 166c28 18 76 18 104 0" stroke="#a7c8dc" stroke-width="6" stroke-linecap="round" fill="none" opacity=".55"/><path d="M114 28l8-15 8 15 14 1-11 10 4 15-15-8-15 8 4-15-11-10z" fill="#d8b56f"/></g></svg>`;
    case 'rabbit': return `${base}<g filter="url(#s)"><path d="M88 87C69 35 76 15 94 12c20 6 26 43 20 78" fill="#fff"/><path d="M152 87c19-52 12-72-6-75-20 6-26 43-20 78" fill="#fff"/><path d="M92 77c-8-31-5-49 1-54" stroke="#f0aebb" stroke-width="10" stroke-linecap="round"/><path d="M148 77c8-31 5-49-1-54" stroke="#f0aebb" stroke-width="10" stroke-linecap="round"/><circle cx="120" cy="121" r="61" fill="#fff"/><circle cx="95" cy="112" r="7" fill="#4d3d35"/><circle cx="145" cy="112" r="7" fill="#4d3d35"/><path d="M120 127l-8 8h16z" fill="#e59aa6"/><path d="M105 149c8 6 22 6 30 0" stroke="#4d3d35" stroke-width="5" stroke-linecap="round" fill="none"/></g></svg>`;
    case 'owl': return `${base}<g filter="url(#s)"><path d="M68 72c11-24 33-35 52-22 19-13 41-2 52 22 18 39 2 95-52 104-54-9-70-65-52-104z" fill="#9d7655"/><circle cx="95" cy="103" r="28" fill="#fff4dd"/><circle cx="145" cy="103" r="28" fill="#fff4dd"/><circle cx="95" cy="103" r="9" fill="#4d3d35"/><circle cx="145" cy="103" r="9" fill="#4d3d35"/><path d="M120 113l-11 16h22z" fill="#e2b44a"/><path d="M84 63 65 40l37 9M156 63l19-23-37 9" fill="#8c6446"/><path d="M100 150c12 8 28 8 40 0" stroke="#fff4dd" stroke-width="6" stroke-linecap="round"/></g></svg>`;
    case 'fox': return `${base}<g filter="url(#s)"><path d="M64 81 82 30l39 43 37-43 18 51" fill="#df7d45"/><path d="M72 97c5-38 31-59 48-59s43 21 48 59c5 38-15 75-48 75s-53-37-48-75z" fill="#e98b4f"/><path d="M78 116c18 22 29 39 42 39s24-17 42-39c-10 50-73 55-84 0z" fill="#fff3e7"/><circle cx="96" cy="101" r="7" fill="#4d3d35"/><circle cx="144" cy="101" r="7" fill="#4d3d35"/><path d="M120 124l-9 8h18z" fill="#4d3d35"/><path d="M104 144c10 7 22 7 32 0" stroke="#4d3d35" stroke-width="5" stroke-linecap="round" fill="none"/></g></svg>`;
    case 'snowleopard': return `${base}<g filter="url(#s)"><path d="M75 74 92 38l25 31 31-31 17 36" fill="#cfd8e4"/><circle cx="120" cy="116" r="61" fill="#eef3f7"/><circle cx="88" cy="86" r="5" fill="#8898a8"/><circle cx="152" cy="86" r="5" fill="#8898a8"/><circle cx="75" cy="116" r="5" fill="#8898a8"/><circle cx="165" cy="116" r="5" fill="#8898a8"/><circle cx="98" cy="134" r="4" fill="#8898a8"/><circle cx="142" cy="134" r="4" fill="#8898a8"/><circle cx="95" cy="111" r="7" fill="#4d3d35"/><circle cx="145" cy="111" r="7" fill="#4d3d35"/><path d="M120 126l-8 7h16z" fill="#4d3d35"/><path d="M104 148c9 7 23 7 32 0" stroke="#4d3d35" stroke-width="5" stroke-linecap="round" fill="none"/></g></svg>`;
    case 'otter': return `${base}<g filter="url(#s)"><ellipse cx="120" cy="126" rx="67" ry="62" fill="#9a6f53"/><ellipse cx="120" cy="129" rx="43" ry="40" fill="#f4ddc5"/><circle cx="93" cy="111" r="7" fill="#4d3d35"/><circle cx="147" cy="111" r="7" fill="#4d3d35"/><path d="M120 126l-8 7h16z" fill="#4d3d35"/><path d="M103 151c10 7 24 7 34 0" stroke="#4d3d35" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M80 162c13 11 32 15 51 10M160 162c-13 11-32 15-51 10" stroke="#7b523d" stroke-width="10" stroke-linecap="round"/><circle cx="120" cy="171" r="19" fill="#fff0c9" stroke="#d8b56f" stroke-width="5"/></g></svg>`;
    case 'penguin': return `${base}<g filter="url(#s)"><ellipse cx="120" cy="123" rx="57" ry="76" fill="#556572"/><ellipse cx="120" cy="136" rx="39" ry="48" fill="#fff7e8"/><circle cx="99" cy="99" r="7" fill="#4d3d35"/><circle cx="141" cy="99" r="7" fill="#4d3d35"/><path d="M120 113l-13 13h26z" fill="#e8a34b"/><path d="M93 193h29M119 193h29" stroke="#e8a34b" stroke-width="10" stroke-linecap="round"/><path d="M69 132c-15 10-22 24-21 44M171 132c15 10 22 24 21 44" stroke="#556572" stroke-width="12" stroke-linecap="round"/></g></svg>`;
    case 'bee': return `${base}<g filter="url(#s)"><ellipse cx="90" cy="93" rx="28" ry="39" fill="#fff" opacity=".62"/><ellipse cx="150" cy="93" rx="28" ry="39" fill="#fff" opacity=".62"/><ellipse cx="120" cy="126" rx="54" ry="62" fill="#f3c653"/><path d="M78 111h84M70 135h100M83 160h74" stroke="#4d3d35" stroke-width="15" opacity=".85"/><circle cx="120" cy="86" r="39" fill="#ffe08a"/><path d="M100 48c-10-18-24-25-36-20M140 48c10-18 24-25 36-20" stroke="#4d3d35" stroke-width="7" stroke-linecap="round"/><circle cx="102" cy="84" r="7" fill="#4d3d35"/><circle cx="138" cy="84" r="7" fill="#4d3d35"/><path d="M107 105c9 7 17 7 26 0" stroke="#4d3d35" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="92" cy="99" r="8" fill="#f2bfc8" opacity=".75"/><circle cx="148" cy="99" r="8" fill="#f2bfc8" opacity=".75"/></g></svg>`;
    case 'dog': return `${base}<g filter="url(#s)"><path d="M69 85c-21 9-31 40-17 64 23-2 35-21 36-47" fill="#b98d65"/><path d="M171 85c21 9 31 40 17 64-23-2-35-21-36-47" fill="#b98d65"/><circle cx="120" cy="119" r="61" fill="#e2ba87"/><ellipse cx="120" cy="137" rx="35" ry="28" fill="#fff0dd"/><circle cx="96" cy="108" r="7" fill="#4d3d35"/><circle cx="144" cy="108" r="7" fill="#4d3d35"/><path d="M120 124l-9 7h18z" fill="#4d3d35"/><path d="M104 149c10 8 22 8 32 0" stroke="#4d3d35" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M86 173c21 18 47 19 68 0" fill="none" stroke="#7ead8b" stroke-width="9" stroke-linecap="round"/></g></svg>`;
    case 'dolphin': return `${base}<g filter="url(#s)"><path d="M51 133c39-57 109-66 155-22-31 5-52 18-63 39-28 6-61 0-92-17z" fill="#6cb3c7"/><path d="M92 148c22 12 48 13 75 3-22 28-55 36-89 21z" fill="#e8fbff"/><path d="M122 97l16-38 18 44" fill="#6cb3c7"/><path d="M66 133 35 112l11 42" fill="#6cb3c7"/><circle cx="149" cy="111" r="5" fill="#4d3d35"/><path d="M162 124c12 4 23 3 32-5" fill="none" stroke="#4d3d35" stroke-width="4" stroke-linecap="round"/><path d="M62 184c38 15 83 15 126 0" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".6"/></g></svg>`;
    case 'hedgehog': return `${base}<g filter="url(#s)"><path d="M63 113c0-47 36-71 70-65 28 5 49 28 53 65-22-11-76-11-123 0z" fill="#8b6a52"/><path d="M74 106 61 76M94 98 86 62M118 96l2-39M143 100l12-35M164 111l22-29" stroke="#5f493b" stroke-width="7" stroke-linecap="round"/><ellipse cx="120" cy="132" rx="61" ry="55" fill="#e8cba8"/><circle cx="97" cy="119" r="7" fill="#4d3d35"/><circle cx="143" cy="119" r="7" fill="#4d3d35"/><path d="M120 133l-8 7h16z" fill="#4d3d35"/><path d="M104 153c10 7 22 7 32 0" stroke="#4d3d35" stroke-width="5" stroke-linecap="round" fill="none"/></g></svg>`;
    case 'tanuki': return `${base}<g filter="url(#s)"><path d="M75 78 82 42l28 26 20-2 28-26 7 38" fill="#a77a55"/><circle cx="120" cy="119" r="62" fill="#bd906b"/><path d="M76 106c12-22 35-24 51-5-12 17-35 19-51 5zM164 106c-12-22-35-24-51-5 12 17 35 19 51 5z" fill="#5c463a"/><ellipse cx="120" cy="139" rx="35" ry="27" fill="#f2dcc2"/><circle cx="97" cy="105" r="6" fill="#fff"/><circle cx="143" cy="105" r="6" fill="#fff"/><path d="M120 126l-9 7h18z" fill="#4d3d35"/><path d="M104 151c10 7 22 7 32 0" stroke="#4d3d35" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M85 174c21 16 49 16 70 0" fill="none" stroke="#7ead8b" stroke-width="8" stroke-linecap="round"/></g></svg>`;
    case 'wolf': return `${base}<g filter="url(#s)"><path d="M68 79 83 30l37 36 37-36 15 49" fill="#7e8994"/><path d="M69 103c8-42 32-61 51-61s43 19 51 61c8 42-19 75-51 75s-59-33-51-75z" fill="#9da7b0"/><path d="M88 122c16 24 23 39 32 39s16-15 32-39c-9 45-55 49-64 0z" fill="#fff1df"/><circle cx="96" cy="105" r="7" fill="#4d3d35"/><circle cx="144" cy="105" r="7" fill="#4d3d35"/><path d="M120 126l-9 8h18z" fill="#4d3d35"/><path d="M103 149c12 7 22 7 34 0" stroke="#4d3d35" stroke-width="5" stroke-linecap="round" fill="none"/></g></svg>`;
    case 'squirrel': return `${base}<g filter="url(#s)"><path d="M161 170c43-15 55-73 21-102-30-25-73-8-66 32 7 38 59 27 51-2" fill="none" stroke="#c9844e" stroke-width="27" stroke-linecap="round"/><path d="M78 92 91 52l29 29 29-29 13 40" fill="#c9844e"/><circle cx="120" cy="118" r="58" fill="#d99a62"/><ellipse cx="120" cy="141" rx="34" ry="25" fill="#fff0d7"/><circle cx="96" cy="109" r="7" fill="#4d3d35"/><circle cx="144" cy="109" r="7" fill="#4d3d35"/><path d="M120 126l-8 7h16z" fill="#4d3d35"/><path d="M104 150c9 7 23 7 32 0" stroke="#4d3d35" stroke-width="5" stroke-linecap="round" fill="none"/><ellipse cx="166" cy="73" rx="15" ry="10" fill="#a86a37" transform="rotate(-25 166 73)"/></g></svg>`;
    default: return commonFace('#f7d3bd');
  }
}

backBtn.addEventListener('click', () => {
  if (state.screen === 'question') prevQuestion();
  else if (state.screen === 'compatibility' || state.screen === 'share') { state.screen = 'result'; render(); }
  else if (state.screen === 'animals' && state.result) { state.screen = 'result'; render(); }
  else { state.screen = 'home'; render(); }
});
homeBtn.addEventListener('click', () => { state.screen = 'home'; render(); });

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}

const sharedResult = loadResultFromURL();
if (sharedResult) {
  state.result = sharedResult;
  state.screen = 'result';
  localStorage.setItem('innerAnimalResult', JSON.stringify(sharedResult));
}

render();
