(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  DevGib.Sites.Github = (function(_super) {
    __extends(Github, _super);

    function Github() {
      _ref = Github.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Github.prototype.key = 'github';

    Github.prototype.icon = '&#xf113;';

    Github.prototype.host = 'github.com';

    Github.prototype.matchingRegex = /^\/[a-zA-Z\-\_\.0-9]+\/[a-zA-Z\-\_\.0-9]+\/?$/;

    return Github;

  })(DevGib.Sites.AbstractSiteModel);

}).call(this);
