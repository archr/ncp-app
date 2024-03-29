module.exports = function(grunt) {
  grunt.initConfig({

    // Project Specific Definitions
    ios_family: "universal",
    ios_adhoc_name: "David Bankier",
    ios_adhoc_profile: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    ios_appstore_name:"YY Digital PTY LTD",
    ios_appstore_profile:"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    android_keystore: "./android.keystore",
    android_keypass: "changeit",

    // Task Configuration
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          src: ['**/*.jade','!**/includes/**','!**/templates/**'],
          dest: 'app',
          cwd: 'app',
          ext: '.xml'
        }]
      }
    },
    ltss: {
      compile: {
        files: [{
          expand: true,
          src: ['**/*.ltss','!**/includes/**'],
          dest: 'app',
          cwd: 'app',
          ext: '.tss'
        }]
      }
    },
    tishadow: {
      options: {
        update: true,
        withAlloy: true
      },
      run_android: {
        command: 'run',
        options: {
          alloy: {
            platform: ['android'],
            noBanner: true,
            logLevel: 1
          }
        }
      },
      run_ios:{
        command: 'run',
        options: {
          alloy: {
            platform: ['ios'],
            noBanner: true,
            logLevel: 1
          }
        }
      },
      spec_android: {
        command: 'spec',
        options: {
          update: false,
          alloy: {
            platform: ['android'],
            noBanner: true,
            logLevel: 1
          }
        }
      },
      spec_ios:{
        command: 'spec',
        options: {
          update: false,
          alloy: {
            platform: ['ios'],
            noBanner: true,
            logLevel: 1
          }
        }
      },
      clear: {
        command: 'clear',
        options: {
          withAlloy:false
        }
      }
    },
    coffee: {
      options:{
        bare: true,
        sourceMap: true
      },
      compile: {
        files: [{
          expand: true,
          src: ["**/*.coffee"],
          dest: "app",
          cwd: "app",
          ext: ".js"
        }]
      }
    },

    // titanium-cli commands in absence of a plugin
    shell: { 
      options: {
        stdout: true,
        stderr: true
      },
      iphone6: {
        command: "titanium build -p ios -S 6.1 -Y iphone" 
      },
      iphone7: {
        command: "titanium build -p ios -S 7.0 -Y iphone" 
      },
      ipad6: {
        command: "titanium build -p ios -S 6.1 -Y ipad" 
      },
      ipad7: {
        command: "titanium build -p ios -S 7.0 -Y ipad" 
      },
      adhoc: {
        command: 'ti build -p ios -F <%= ios_family %> -T dist-adhoc -R "<%= ios_adhoc_name %>" -P" <%= ios_adhoc_profile %>"  -O ~/Desktop ' 
      },
      appstore: {
        command: 'ti build -p ios -F <%= ios_family %> -T dist-appstore -R "<%= ios_appstore_name %>" -P" <%= ios_apptore_profile %>"  -O ~/Desktop ' 
      },
      playstore: {
        command: 'ti build -T dist-playstore -O ~/Desktop -p android -K <%= android_keystore %> - P <%= android_keypass %>' 
      }
    },
    watch: {
      options: {
        nospawn: true
      },
      ios: {
        files: ["app/**/*.jade","app/**/*.ltss","app/**/*.coffee"],
        tasks: ['build','tishadow:run_ios']
      },
      android: {
        files: ["app/**/*.jade","app/**/*.ltss","app/**/*.coffee"],
        tasks: ['build','tishadow:run_android']
      }
    },
    clean: {
      project: {
        src: ["Resources/","build/","app/views/**/*.xml","app/styles/**/*.tss","app/controllers/**/*.js"]
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', 'build');
  grunt.registerTask('build', ["jade","ltss","coffee"]);
  grunt.registerTask('dev_ios', ['build','tishadow:run_ios','watch:ios']);
  grunt.registerTask('dev_android', ['build','tishadow:run_android','watch:android']);
  grunt.registerTask('test_ios', ['tishadow:clear','build','tishadow:spec_ios']);
  grunt.registerTask('test_android', ['tishadow:clear','build','tishadow:spec_android']);
  //titanium cli tasks
  ['iphone6','iphone7','ipad6','ipad7','appstore','adhoc','playstore'].forEach(function(target) {
    grunt.registerTask(target, ['build','shell:'+target]);
  });
   
  //only modify changed file
  grunt.event.on('watch', function(action, filepath) {
    var o = {};
    if (filepath.match(/.jade$/) && filepath.indexOf("includes") === -1) {
      o[filepath.replace(".jade",".xml")] = [filepath];
      grunt.config.set(['jade', 'compile', 'files'],o);
    } else if (filepath.match(/.ltss$/) && filepath.indexOf("includes") === -1){
      o[filepath.replace(".ltss",".tss")] = [filepath];
      grunt.config.set(['ltss', 'compile', 'files'],o);
    } else if (filepath.match(/.coffee/)) {
      o[filepath.replace(".coffee",".js")] = [filepath];
      grunt.config.set(['coffee', 'compile', 'files'],o);
    }

  });
};
