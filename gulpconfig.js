var AppRoot =  'app/';
var SrcRoot = 'src/';
var SrcAssetRoot = SrcRoot + 'assets/';
var BuildRoot = 'build/';
var AssetsRoot = AppRoot + 'assets/';


var IndexFileName = 'index.html';
var IndexFile = AppRoot + IndexFileName;

var LessRoot = SrcAssetRoot + 'less/';
var LessCompileFiles = [LessRoot + 'custom.less'];
var LessFiles = LessRoot + '**/*.less';

var CSSRoot = AssetsRoot  + 'css/';
var CSSFiles = CSSRoot  + '**/*.css';
var CSSMapRoot = CSSRoot;

var TypeScriptRoot = SrcRoot;
var TypeScriptAppRoot =  AssetsRoot + 'js/';
var TypeScriptFiles = TypeScriptRoot + '**/*.ts';

var ImageDirectoryRoot = AssetsRoot + 'img/';

var ViewsRoot = AppRoot + 'views/';
var ViewsSharedRoot = ViewsRoot + 'shared/';

var HtmlFiles = AppRoot + '**/*.html';


var config = {
AppRoot: AppRoot,
SrcRoot: SrcRoot,
BuildRoot: BuildRoot,
AssetsRoot: AssetsRoot,


IndexFileName: IndexFileName,
IndexFile: IndexFile,

LessRoot: LessRoot,
LessCompileFiles: LessCompileFiles,
LessFiles: LessFiles,

CSSRoot: CSSRoot,
CSSMapRoot: CSSMapRoot,
CSSFiles: CSSFiles,

TypeScriptRoot: TypeScriptRoot,
TypeScriptAppRoot:  TypeScriptAppRoot,
TypeScriptFiles: TypeScriptFiles,

ImageDirectoryRoot: ImageDirectoryRoot,

ViewsRoot: ViewsRoot,
ViewsSharedRoot: ViewsSharedRoot,

HtmlFiles: HtmlFiles



};


var webserver = {
    Port: 5616,
    ReloadPort: 35779
};


module.exports = {
    Files: config,
    Server: webserver
};