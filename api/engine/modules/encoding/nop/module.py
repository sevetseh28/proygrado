from engine.modules.module import Module


class NopEncoding(Module):
    def __init__(self, **kwargs):
        super(NopEncoding, self).__init__(**kwargs)

    def run(self, value):
        return value
