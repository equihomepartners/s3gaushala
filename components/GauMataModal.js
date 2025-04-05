import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Divider,
  VStack,
  HStack,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const GauMataModal = ({ isOpen, onClose }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const headingColor = useColorModeValue('orange.500', 'orange.300')
  const accentColor = useColorModeValue('orange.100', 'orange.900')

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent bg={bgColor} borderRadius="2xl">
        <ModalHeader>
          <VStack spacing={2} align="start">
            <Heading size="xl" color={headingColor} fontWeight="bold">
              GAU MATA: THE ETERNAL NURTURER
            </Heading>
            <Text fontSize="sm" color="gray.500">
              The only being revered as "Maatha" – Mother
            </Text>
          </VStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={8}>
          <VStack spacing={8} align="stretch">
            <Box p={6} bg={accentColor} borderRadius="xl">
              <HStack spacing={2}>
                <Icon as={FaQuoteLeft} color={headingColor} />
                <Text fontSize="lg" color={textColor} fontStyle="italic" textAlign="center">
                  A symbol of unconditional love, nurture and sacrifice. She is not just an animal but a giver, a protector, a divine force.
                </Text>
                <Icon as={FaQuoteRight} color={headingColor} />
              </HStack>
            </Box>

            <Box>
              <Heading size="md" color={headingColor} mb={4}>
                Ancient Wisdom
              </Heading>
              <VStack spacing={4} align="stretch">
                <Text color={textColor}>
                  Since ancient times, she has been at the heart of Sanatana Dharma.
                </Text>
                <Box pl={4} borderLeft="4px solid" borderColor={headingColor}>
                  <Text color={textColor}>
                    • The Rigveda calls her a gift from the Gods
                  </Text>
                  <Text color={textColor}>
                    • The Atharvaveda reveals she carries 33 crore Devi-Devtas
                  </Text>
                  <Text color={textColor}>
                    • She is worshipped as Kamadhenu, the wish-fulfilling cow
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" color={headingColor} mb={4}>
                Divine Gifts
              </Heading>
              <VStack spacing={4} align="stretch">
                <Text color={textColor}>
                  She gives without asking. Her milk nourishes, her ghee fuels yagnas, her dung purifies. Even her breath cleanses the air.
                </Text>
                <Box pl={4} borderLeft="4px solid" borderColor={headingColor}>
                  <Text color={textColor}>
                    • The Charaka Samhita calls her touch a medicine
                  </Text>
                  <Text color={textColor}>
                    • The Mahabharata promises her service washes away sins
                  </Text>
                  <Text color={textColor}>
                    • The Garuda Purana says serving her brings peace and liberation
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" color={headingColor} mb={4}>
                Spiritual Connection
              </Heading>
              <Text color={textColor}>
                Just as the human spine has 33 vertebrae, she carries 33 crore divine energies, one reflects the other. She sustains life itself, yet how often do we honour her?
              </Text>
              <Text color={textColor} mt={4}>
                Gau Seva is not just kindness. It is dharma, a sacred path to spiritual growth. Without it, even the greatest acts of charity remain incomplete.
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" color={headingColor} mb={4}>
                S3 Gaushala: A Sacred Haven
              </Heading>
              <VStack spacing={4} align="stretch">
                <Text color={textColor}>
                  Born from S3 Foundation in 2005 by Purushotam Tandu, with the blessings of Himalayan Masters and spiritual luminaries, S3 is more than a shelter. It is a spiritually charged space where Maha Yagnas and Gau Seva uplift and purify the land.
                </Text>
                <Box pl={4} borderLeft="4px solid" borderColor={headingColor}>
                  <Text color={textColor}>
                    • Home to 200+ Gir cows, roaming freely
                  </Text>
                  <Text color={textColor}>
                    • Sanctified by revered saints including Somnath Maharshi, Pandit Shri Rama Sharma, and others
                  </Text>
                  <Text color={textColor}>
                    • Daily spiritual practices including Laksha Chandi Yagna, Maha Mrityunjaya Homas, and more
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Divider />

            <Box p={6} bg={accentColor} borderRadius="xl">
              <Text color={textColor} fontSize="lg" textAlign="center" fontStyle="italic">
                "When we protect her, we protect ourselves. This is Gau Mata. This is her sacred haven. She has given all her life. Now, it is our turn to give back."
              </Text>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default GauMataModal 