import jetbrains.buildServer.configs.kotlin.v2018_1.*
import jetbrains.buildServer.configs.kotlin.v2018_1.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v2018_1.triggers.vcs

version = "1.0.1"

project {
    description = "Roman Numerals Kata"
    builtType(Build)
}

object Build : BuiltType({
    name = "Build"

    vcs {
        root(DslContext.settingsRoot)
    }

    steps {
        script {
            name = "Install dependencies"
            scriptContent = """
                #!/bin/bash
                npm install
            """.trimIndent()
        }
        script {
            name = "Jasmine"
            scriptContent = """
                karma start --single-run --browsers ChromeHeadless
            """.trimIndent()
        }
    }

    triggers {
        vcs {}
    }
})