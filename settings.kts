version = "2019.06"

project {
    description = "Roman Numerals Kata"
    builtType(Build)
}

object Build : BuiltType({
    name = "Build"

    vcs {
        root(DslContext.settingsRoot)
    }

    triggers {
        vcs {
            //
        }
    }
})